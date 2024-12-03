import { QuotesList } from './quotes/quotes-list';
import { CardsGrid } from './cards/cards-grid';
import { MenuItems } from './menu/menu-items';

export function MainContent() {
  return (
    <main className="grid grid-cols-2 gap-8">
      <div>
        <QuotesList />
        <MenuItems />
      </div>
      <CardsGrid />
    </main>
  );
}

