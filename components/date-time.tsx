"use client";

import { useEffect, useState } from 'react';
// import { getWeather } from '@/lib/weather';

// interface WeatherInfo {
//   temperature: number;
//   condition: string;
// }

export function DateTime() {
  const [dateTime, setDateTime] = useState('');
  // const [weather, setWeather] = useState<WeatherInfo>({ temperature: 0, condition: 'unavailable' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).replace(',', '');
      setDateTime(formatted);
    };

    updateDateTime();
    const dateInterval = setInterval(updateDateTime, 1000);

    // const updateWeather = async () => {
    //   try {
    //     const weatherData = await getWeather();
    //     setWeather(weatherData);
    //   } catch (error) {
    //     console.error('Error updating weather:', error);
    //     setWeather({ temperature: 0, condition: 'unavailable' });
    //   }
    // };

    // updateWeather();
    // const weatherInterval = setInterval(updateWeather, 5 * 60 * 1000);

    return () => {
      clearInterval(dateInterval);
      // clearInterval(weatherInterval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-mono">
      [{dateTime}]
    </div>
  );
}