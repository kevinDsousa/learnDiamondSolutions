import { Document } from 'mongoose';

export interface Developers extends Document {
  name: string;
  dataFoundation: Date;
  website: string;
  headquarters: string;
}
