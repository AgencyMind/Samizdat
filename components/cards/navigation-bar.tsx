interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className = '' }: NavigationBarProps) {
  return (
    <div className={`relative z-10 ${className}`}>
      {/* White gradient background */}
      <div className="absolute inset-0" 
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,1) 100%)'
        }}
      />

      {/* Navigation bar content */}
      <div className="relative z-10">
        <div className="border-b-2 border-black" />
        
        <div className="h-[32px] flex items-center justify-center">
          <div className="bg-white border-2 border-[#0066FF] flex items-center rounded w-16 py-1">
            <div className="flex-1 flex justify-center">
              <svg width="10" height="6" viewBox="0 0 10 6" className="cursor-pointer">
                <path d="M0 6L5 0L10 6H0Z" fill="black"/>
              </svg>
            </div>
            <div className="w-0.5 h-3 bg-[#0066FF]"></div>
            <div className="flex-1 flex justify-center">
              <svg width="10" height="6" viewBox="0 0 10 6" className="cursor-pointer">
                <path d="M0 0L5 6L10 0H0Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-black" />
      </div>
    </div>
  );
}
