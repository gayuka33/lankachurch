"use client";

import { useState, type FormEvent } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { BookOpenText, Search, Loader2, Languages } from "lucide-react";
import { bibleVerseSearch, type BibleVerseSearchInput, type BibleVerseSearchOutput } from "@/ai/flows/bible-verse-search";
import { useToast } from "@/hooks/use-toast";

const bibleSearchSchema = z.object({
  title: z.string().min(1, "Book title is required."),
  chapter: z.string().min(1, "Chapter is required."), // Kept as string to allow flexibility, can be parsed to number later
  verse: z.string().min(1, "Verse is required."),   // Kept as string
  language: z.enum(["English", "Sinhala", "Tamil"]),
});

type BibleSearchFormValues = z.infer<typeof bibleSearchSchema>;

export function BibleVerseSearchClient() {
  const [searchResult, setSearchResult] = useState<BibleVerseSearchOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<BibleSearchFormValues>({
    resolver: zodResolver(bibleSearchSchema),
    defaultValues: {
      title: "",
      chapter: "",
      verse: "",
      language: "English",
    },
  });

  const onSubmit = async (data: BibleSearchFormValues) => {
    setIsLoading(true);
    setSearchResult(null);
    try {
      const searchInput: BibleVerseSearchInput = {
        ...data
      };
      const result = await bibleVerseSearch(searchInput);
      setSearchResult(result);
    } catch (error) {
      console.error("Error searching Bible verse:", error);
      toast({
        title: "Search Error",
        description: "Could not find the verse or an error occurred. Please check your input and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <BookOpenText className="h-16 w-16 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl text-primary">AI Bible Verse Search</CardTitle>
        <CardDescription>
          Find specific Bible verses by entering the book title, chapter, and verse number. 
          Search available in English, Sinhala, and Tamil.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Title (e.g., Genesis, John)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book title" {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="chapter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chapter</FormLabel>
                    <FormControl>
                      <Input type="text" inputMode="numeric" placeholder="e.g., 1" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verse</FormLabel>
                    <FormControl>
                      <Input type="text" inputMode="numeric" placeholder="e.g., 1" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center"><Languages className="h-4 w-4 mr-2"/> Language</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Sinhala">Sinhala (සිංහල)</SelectItem>
                      <SelectItem value="Tamil">Tamil (தமிழ்)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
              {isLoading ? "Searching..." : "Search Verse"}
            </Button>
          </form>
        </Form>
      </CardContent>
      {searchResult && !isLoading && (
        <CardFooter className="mt-6 border-t pt-6">
          <div className="w-full space-y-3">
            <h3 className="font-headline text-xl text-primary">Search Result:</h3>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground bg-secondary/30 p-4 rounded-md">
              <p className="mb-2 whitespace-pre-wrap">{searchResult.verseText}</p>
              <footer className="text-sm text-muted-foreground">- {form.getValues("title")} {form.getValues("chapter")}:{form.getValues("verse")} ({searchResult.translation || form.getValues("language")})</footer>
            </blockquote>
          </div>
        </CardFooter>
      )}
       {isLoading && !searchResult && (
        <CardFooter className="mt-6 border-t pt-6 flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardFooter>
      )}
    </Card>
  );
}
