export interface User {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  playlists: Playlist[];
  likedSongs: string[];
  appointments: Appointment[];
}

export interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
  createdAt: Date;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
}

export interface Appointment {
  id: string;
  artistId: string;
  userId: string;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  type: 'meeting' | 'performance';
  details: string;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'payment';
  description: string;
  createdAt: Date;
}

