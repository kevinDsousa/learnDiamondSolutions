import { Document } from 'mongoose';

export interface Consoles extends Document {
  name: string;
  dataRelease: string;
  website: string;
  company: string;
}
