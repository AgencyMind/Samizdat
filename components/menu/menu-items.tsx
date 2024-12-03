import React from 'react';

const firstLine = [
  "stochastic blue",
  "invoke agents",
  "quickist"
];

const secondLine = [
  "lens",
  "farcaster",
  "bluesky",
  "threads"
];

export function MenuItems() {
  const renderLine = (items: string[]) => (
    <div className="flex items-center justify-center font-mono">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <span className="text-blue-500 hover:underline cursor-pointer">
            {item}
          </span>
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