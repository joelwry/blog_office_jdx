// models/User.ts
import mongoose, { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  walletBalance: number;
  playlists: IPlaylist[];
  likedSongs: string[];
  appointments: IAppointment[];
}

export interface IPlaylist extends Document {
  name: string;
  tracks: ITrack[];
  createdAt: Date;
}

export interface ITrack extends Document {
  title: string;
  artist: string;
  url: string;
}

export interface IAppointment extends Document {
  artistId: string;
  userId: string;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  type: 'meeting' | 'performance';
  details: string;
}

export interface ITransaction extends Document {
  userId: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'payment';
  description: string;
  createdAt: Date;
}

// Schema definitions
const TrackSchema = new Schema<ITrack>({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  url: { type: String, required: true },
});

const PlaylistSchema = new Schema<IPlaylist>({
  name: { type: String, required: true },
  tracks: [TrackSchema],
  createdAt: { type: Date, default: Date.now },
});

const AppointmentSchema = new Schema<IAppointment>({
  artistId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  type: { type: String, enum: ['meeting', 'performance'], required: true },
  details: { type: String },
});

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  walletBalance: { type: Number, default: 0 },
  playlists: [PlaylistSchema],
  likedSongs: [{ type: String }],
  appointments: [AppointmentSchema],
});

export const User = model<IUser>('User', UserSchema);
