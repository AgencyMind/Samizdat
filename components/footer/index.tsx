import { MenuItems } from '../menu/menu-items';

export function Footer() {
  return (
    <footer className="text-center mt-8">
      <p className="mb-2">Today's menu:</p>
      <MenuItems />
    </footer>
  );
}