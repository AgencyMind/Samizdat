import { QuoteItem } from './quote-item';

const quotes = [
  {
    number: "01",
    content: "You think making something people love is the hard part? It isn't.",
  },
  {
    number: "02",
    content: "This is how I failed, so you don't have to.",
  },
  {
    number: "03",
    content: "It made you excited to come back, again and again. But I couldn't keep the lights on.",
  },
  {
    number: "04",
    content: "We couldn't figure out the money. The tech wasn't ready. We needed to fail more, to really earn from it the hard way.",
  },
  {
    number: "05",
    content: "Did you really think what happens between people, that keeps you coming back, was worthless?",
  },
  {
    number: "06",
    content: "Now it's obvious. But here's that one thing no one's figured out yet.",
  },
  {
    number: "07",
    content: "Spot the bait. Then listen.",
  },
];

export function QuotesList() {
  return (
    <div>
      <div className="mb-8">
        {quotes.map((quote) => (
          <QuoteItem key={quote.number} {...quote} />
        ))}
      </div>
      
      <div className="text-center">
        <hr className="w-32 mx-auto border-t border-black dark:border-white" />
        
        <div className="mt-8 mb-12">
          <p>
            Here, you will find tools for self-published thoughts<br />
            and works that can persist through the noise.
          </p>
          <p className="mt-4">
            You will find art and memes, as means to live by.
          </p>
        </div>

        <p className="mb-4">Today's menu:</p>
      </div>
    </div>
  );
}