// models/Artist.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Artist extends Document {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  bio: string;
  genre: string;
  tracks: string[]; // Array of Track IDs
  albums: string[]; // Array of Album IDs
  blogPosts: string[]; // Array of BlogPost IDs
  appointments: string[]; // Array of Appointment IDs
  bookingRate: number;
}

const ArtistSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  walletBalance: { type: Number, default: 0 },
  bio: { type: String, default: '' },
  genre: { type: String, default: '' },
  tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
  blogPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  bookingRate: { type: Number, default: 0 },
});

// Export the model
export default mongoose.models.Artist || mongoose.model<Artist>('Artist', ArtistSchema);