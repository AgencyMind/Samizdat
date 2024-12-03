interface QuoteItemProps {
  number: string;
  content: string;
}

export function QuoteItem({ number, content }: QuoteItemProps) {
  return (
    <div className="mb-4">
      <span className="quote-number">{number}:</span>
      {content}
    </div>
  );
}