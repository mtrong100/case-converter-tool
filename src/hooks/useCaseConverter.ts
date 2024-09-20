import {
  toCapitalizeWords,
  toHashtag,
  toLowerCase,
  toSentenceCase,
  toUpperCase,
} from "@/helper";
import { useState } from "react";

export default function useCaseConverter() {
  const [text, setText] = useState<string>("");

  const onLowerCase = () => {
    const newText = toLowerCase(text);
    setText(newText);
  };

  const onUpperCase = () => {
    const newText = toUpperCase(text);
    setText(newText);
  };

  const onSentenceCase = () => {
    const newText = toSentenceCase(text);
    setText(newText);
  };

  const onCapitalizeWords = () => {
    const newText = toCapitalizeWords(text);
    setText(newText);
  };

  const onHashtag = () => {
    const newText = toHashtag(text);
    setText(newText);
  };

  const onDelete = () => {
    setText("");
  };

  return {
    text,
    setText,
    onLowerCase,
    onSentenceCase,
    onCapitalizeWords,
    onHashtag,
    onUpperCase,
    onDelete,
  };
}
