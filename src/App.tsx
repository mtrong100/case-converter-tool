import useCaseConverter from "./hooks/useCaseConverter";
import React from "react";
import Header from "./components/Header";
import { useToast } from "@/hooks/use-toast";
import { Trash } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  const { toast } = useToast();
  const {
    text,
    setText,
    onLowerCase,
    onSentenceCase,
    onCapitalizeWords,
    onHashtag,
    onUpperCase,
    onDelete,
  } = useCaseConverter();
  const onCopy = () => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard",
    });
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Toaster />

      <main className="w-full max-w-4xl mx-auto px-5">
        <div className="mt-10 space-y-2">
          <Textarea
            placeholder="Type your text here."
            className="min-h-[200px]"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
          />

          <div className="flex flex-wrap gap-2">
            <Button onClick={onSentenceCase}>Sentence Case</Button>
            <Button onClick={onLowerCase}>lower case</Button>
            <Button onClick={onUpperCase}>UPPER CASE</Button>
            <Button onClick={onCapitalizeWords}>Capitalize Words</Button>
            <Button onClick={onHashtag}>Hashtag</Button>
            <Button variant="destructive" onClick={onDelete}>
              <Trash className="mr-1 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Button
          size="lg"
          onClick={onCopy}
          className="bg-green-500 mt-10 mx-auto flex hover:bg-green-600"
        >
          <Copy className="mr-1 h-4 w-4" /> Copy to clipboard
        </Button>
      </main>
    </ThemeProvider>
  );
}

export default App;
