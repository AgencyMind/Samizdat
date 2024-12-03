import { DateTime } from './date-time';

export function Header() {
  return (
    <header className="p-4 font-mono text-sm">
      <DateTime />
      <h1 className="text-center text-xl my-4">SAMIZDAT</h1>
    </header>
  );
}