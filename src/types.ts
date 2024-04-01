export interface CityProps {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: PositionProps;
  id: number;
}

export interface PositionProps {
  lat: number;
  lng: number;
}

export interface CountryProps {
  country: string;
  emoji: string;
}
