import { Document } from 'mongoose';

export interface Consoles extends Document {
  name: string;
  dataRelease: Date;
  website: string;
  company: string;
}
