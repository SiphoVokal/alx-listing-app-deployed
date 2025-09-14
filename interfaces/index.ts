export interface CardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
}

export interface ReviewSectionProps {
  propertyId: string;
}

export interface PropertyCardProps {
  id: string | any;
  imageUrl: string;
  title: string;
  location: string;
  rating: number;
  beds: number;
  baths: number;
  guests: number;
  price: number;
  tags?: string[];
}

export interface Review {
  id: string | number;
  comment: string;
}

export interface Property {
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  description: string;
};

export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}