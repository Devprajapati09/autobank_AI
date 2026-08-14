import { useContext } from "react";
import { AIContext } from "../context/AIContext";

export function useAI() {
  const ctx = useContext(AIContext);
  if (!ctx) throw new Error("useAI must be used within AIProvider");
  return ctx;
}
