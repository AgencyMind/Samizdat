import './globals.css';
import './fonts.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Samizdat',
  description: 'Tools for self-published thoughts and works that can persist through the noise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-dos antialiased'
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
