import { QuotesList } from './quotes/quotes-list';
import { CardsGrid } from './cards/cards-grid';
import { MenuItems } from './menu/menu-items';

export function MainContent() {
  return (
    <main className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-36">
      <div className="max-w-2xl">
        <QuotesList />
        <MenuItems />
      </div>
      <CardsGrid />
    </main>
  );
}
