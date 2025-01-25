import { Track, Appointment } from './user'

export interface Artist {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  bio: string;
  genre: string;
  tracks: Track[];
  albums: Album[];
  blogPosts: BlogPost[];
  appointments: Appointment[];
  bookingRate: number;
}

export interface Album {
  id: string;
  title: string;
  releaseDate: Date;
  tracks: Track[];
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishDate: Date;
}

export interface MusicStats {
  totalPlays: number;
  playlistAdditions: number;
  likes: number;
}

