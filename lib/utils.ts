// lib/utils.ts (Full Corrected Code)
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Corrected function signature: rest parameter must be an array type
export function cn(...inputs: ClassValue[]) { 
  return twMerge(clsx(inputs))
}