"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string; // e.g., "class" or "data-theme"
  defaultTheme?: string; // e.g., "light" or "dark"
  enableSystem?: boolean; // Enable OS-level theme detection
  disableTransitionOnChange?: boolean; // Prevent transition effects during theme switch
  forcedTheme?: string; // Force a specific theme (e.g., for demos)
  value?: string; // Current theme value
  themes?: string[]; // Array of available themes (e.g., ["light", "dark"])
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
