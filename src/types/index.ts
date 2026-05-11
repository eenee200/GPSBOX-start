export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  icon: string;
  badge: string;
  title: string;
  items: string[];
}

export interface AboutCard {
  icon: string;
  badge: string;
  title: string;
  description: string;
}

export interface TechCard {
  icon: string;
  title: string;
  items: string[];
}

export interface WhyCard {
  title: string;
  description: string;
}

export interface MapDot {
  top: string;
  left: string;
  isGreen: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  sub?: string;
}

export interface StatusItem {
  label: string;
  value: string;
}

export interface RouteItem {
  label: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  techType: string;
  region: string;
  message: string;
}
