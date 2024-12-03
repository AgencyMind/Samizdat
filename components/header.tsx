"use client";

import { DateTime } from './date-time';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="grid grid-cols-3 items-center mb-8">
      <DateTime />
      <div className="text-center text-xl font-normal">SAMIZDAT</div>
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
}