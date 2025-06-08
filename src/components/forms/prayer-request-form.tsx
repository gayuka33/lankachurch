"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import React from "react";

const prayerRequestSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal("")),
  request: z.string().min(10, {
    message: "Prayer request must be at least 10 characters.",
  }).max(1000, {
    message: "Prayer request must not exceed 1000 characters."
  }),
  isAnonymous: z.boolean().default(false),
});

type PrayerRequestFormValues = z.infer<typeof prayerRequestSchema>;

export function PrayerRequestForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<PrayerRequestFormValues>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      request: "",
      isAnonymous: false,
    },
  });

  async function onSubmit(data: PrayerRequestFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    console.log("Prayer Request Submitted: ", data);
    toast({
      title: "Prayer Request Submitted",
      description: "Thank you! Our prayer team will be praying for you.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Submit Your Prayer Request</CardTitle>
        <CardDescription>
          Share your prayer needs with us. Our team is here to support you in prayer. 
          You can choose to submit anonymously.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="isAnonymous"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                  <FormControl>
                    <input 
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="form-checkbox h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Submit Anonymously
                    </FormLabel>
                    <FormDescription>
                      If checked, your name and email will not be required or recorded with this request.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            {!form.watch("isAnonymous") && (
              <>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (Optional)</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        We will only use this to contact you if needed regarding your prayer request.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <FormField
              control={form.control}
              name="request"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prayer Request</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please share your prayer request here..."
                      className="resize-y min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
