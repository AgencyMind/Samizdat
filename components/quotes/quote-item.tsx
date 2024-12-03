interface QuoteItemProps {
  number: string;
  content: string;
}

export function QuoteItem({ number, content }: QuoteItemProps) {
  return (
    <div className="mb-4">
      <a href="#" className="quote-number">{number}:</a>
      {content}
    </div>
  );
}