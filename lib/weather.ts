// Weather service temporarily disabled
//
// Note: OpenWeatherMap API keys require 2-4 hours to be activated after initial registration.
// If you're getting 401 (Unauthorized) errors with a new API key, please wait a few hours
// and try again. You can check your API key status at: https://home.openweathermap.org/api_keys
//
// import axios from 'axios';

// interface WeatherData {
//   temperature: number;
//   condition: string;
// }

// const NYC_COORDS = {
//   lat: 40.7128,
//   lon: -74.0060
// };

export async function getWeather(): Promise<any> {
  return {
    temperature: 0,
    condition: 'unavailable'
  };
}

// function getCurrentPosition(): Promise<GeolocationPosition> {
//   return new Promise((resolve, reject) => {
//     if (typeof window === 'undefined' || !navigator.geolocation) {
//       reject(new Error('Geolocation not supported'));
//       return;
//     }

//     // Custom permission prompt with privacy notice
//     if (!localStorage.getItem('weatherPermissionAsked')) {
//       const permissionGranted = window.confirm(
//         'Would you like to see your local weather? ' +
//         'Your location information will only be used to display current weather conditions ' +
//         'and will not be stored or used for any other purpose. ' +
//         'If you decline, New York City weather will be shown instead.'
//       );
//       localStorage.setItem('weatherPermissionAsked', 'true');
      
//       if (!permissionGranted) {
//         reject(new Error('Permission denied by user'));
//         return;
//       }
//     }
    
//     navigator.geolocation.getCurrentPosition(resolve, reject, {
//       enableHighAccuracy: false,
//       maximumAge: 300000,
//       timeout: 5000
//     });
//   });
// }

// function simplifyWeatherCondition(main: string, description: string): string {
//   const isNight = new Date().getHours() >= 18 || new Date().getHours() <= 6;
//   if (isNight && main === 'Clear') {
//     return 'full moon';
//   }

//   const conditionMap: { [key: string]: string } = {
//     'Clear': 'clear skies',
//     'Clouds': description.includes('scattered') ? 'partly cloudy' : 'cloudy',
//     'Rain': description.includes('light') ? 'light rain' : 'rain',
//     'Drizzle': 'drizzle',
//     'Thunderstorm': 'thunderstorm',
//     'Snow': 'snow',
//     'Mist': 'misty',
//     'Fog': 'foggy',
//     'Haze': 'hazy'
//   };

//   return conditionMap[main] || description;
// }
