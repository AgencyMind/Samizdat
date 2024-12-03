type QuoteCardProps = {
  number: string;
  content: string;
};

export function QuoteCard({ number, content }: QuoteCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:border-primary">
      <div className="flex items-start justify-between">
        <span className="text-sm font-mono text-blue-500">{number}:</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed">{content}</p>
    </div>
  );
}