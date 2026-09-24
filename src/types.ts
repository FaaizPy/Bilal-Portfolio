export interface ConsultationCardData {
  id: string;
  title: string;
  badge?: string;
  tagline: string;
  description: string;
  buttonText: string;
  url: string;
  features: string[];
}

export interface SocialCardData {
  name: string;
  handle: string;
  platform: 'instagram' | 'tiktok' | 'linkedin';
  description: string;
  url: string;
}
