import React from 'react';

interface MenuItem {
  text: string;
  href: string;
}

const firstLine: MenuItem[] = [
  { text: "stochastic blue", href: "https://stochasticblue.com/" },
  { text: "invoke agents", href: "#" },
  { text: "quickist", href: "https://quickist.pro/" }
];

const secondLine: MenuItem[] = [
  { text: "lens", href: "https://orb.club/@isekai" },
  { text: "farcaster", href: "https://warpcast.com/samizdat" },
  { text: "bluesky", href: "https://bsky.app/profile/samizdat.ink" },
  { text: "threads", href: "https://www.threads.net/@kende" }
];

export function MenuItems() {
  const renderLine = (items: MenuItem[]) => (
    <div className="flex items-center justify-center font-mono">
      {items.map((item, index) => (
        <React.Fragment key={item.text}>
          <a 
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {item.text}
          </a>
          {index < items.length - 1 && (
            <span className="text-blue-500 mx-3">*</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="space-y-2 text-center">
      {renderLine(firstLine)}
      {renderLine(secondLine)}
    </div>
  );
}