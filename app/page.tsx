import { Header } from '@/components/header';
import { MainContent } from '@/components/main-content';

export default function Home() {
  return (
    <div className="container mx-auto px-8">
      <Header />
      <MainContent />
    </div>
  );
}
