import { NavigationBar } from './navigation-bar';

export function CardsGrid() {
  return (
    <div className="relative">
      <div className="cards-grid">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="card" />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0">
        {/* Gradient overlay */}
        <div 
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '90px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.96) 50%, rgba(255,255,255,1) 100%)'
          }}
        />

        {/* Navigation bar positioned 90px from bottom */}
        <NavigationBar className="absolute inset-x-0 bottom-[90px]" />
      </div>
    </div>
  );
}
