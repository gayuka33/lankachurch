"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User, Loader2, Languages } from "lucide-react";
import { jesusChatbot, type JesusChatbotInput, type JesusChatbotOutput } from "@/ai/flows/jesus-chatbot";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  language?: "Sinhala" | "Tamil" | "English";
}

export function JesusChatbotClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState<"Sinhala" | "Tamil" | "English">("English");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollableViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollableViewport) {
        scrollableViewport.scrollTop = scrollableViewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      language,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatbotInput: JesusChatbotInput = { message: input, language };
      const result: JesusChatbotOutput = await jesusChatbot(chatbotInput);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: result.response,
        sender: "ai",
        language,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error calling Jesus chatbot:", error);
      toast({
        title: "Error",
        description: "Could not get a response. Please try again.",
        variant: "destructive",
      });
      // Optionally add the error message back to input or as a system message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        sender: "ai",
        language,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Bot className="h-16 w-16 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl text-primary">Chat with Jesus (AI)</CardTitle>
        <CardDescription>
          Ask questions or seek guidance. Responses are based on the teachings and character of Jesus as portrayed in the Bible. 
          Select your preferred language for the conversation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-2">
          <Label htmlFor="language-select" className="flex items-center text-sm font-medium text-muted-foreground">
            <Languages className="h-4 w-4 mr-2"/> Conversation Language
          </Label>
          <Select value={language} onValueChange={(value: "Sinhala" | "Tamil" | "English") => setLanguage(value)}>
            <SelectTrigger id="language-select" className="w-full">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Sinhala">Sinhala (සිංහල)</SelectItem>
              <SelectItem value="Tamil">Tamil (தமிழ்)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ScrollArea className="h-[400px] w-full border rounded-md p-4 bg-secondary/20" ref={scrollAreaRef}>
          {messages.length === 0 && (
            <p className="text-center text-muted-foreground italic py-4">
              Start the conversation by typing your message below.
            </p>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 mb-4 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={18}/></AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[75%] rounded-lg px-4 py-2 shadow ${
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-card text-card-foreground border border-border rounded-bl-none"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
              {msg.sender === "user" && (
                 <Avatar className="h-8 w-8">
                   <AvatarFallback className="bg-accent text-accent-foreground"><User size={18}/></AvatarFallback>
                 </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
             <div className="flex items-end gap-2 mb-4 justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={18}/></AvatarFallback>
                </Avatar>
                <div className="max-w-[75%] rounded-lg px-4 py-2 shadow bg-card text-card-foreground border border-border rounded-bl-none">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder={`Message in ${language}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            disabled={isLoading}
            aria-label="Chat message input"
          />
          <Button type="submit" disabled={isLoading || !input.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
