export type PageView = 'home' | 'bearings' | 'eh-handwash' | 'rama-wire';

export interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export interface HeroProps {}
export interface LoadingScreenProps {}
export interface FloatingSocialsProps {}
export interface BrandsProps {}
export interface StatsProps {}
export interface ContactProps {}

export interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  onNavigate?: () => void;
}

export interface BearingsPageProps {
  onBack: () => void;
}

export interface EHHandwashPageProps {
  onBack: () => void;
}

export interface RAMAWirePageProps {
  onBack: () => void;
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

export interface BearingSubtype {
  title: string;
  description: string;
  image: string;
}

export interface BearingCategory {
  id: string;
  title: string;
  description: string;
  subTypes: BearingSubtype[];
}