import { Document } from 'mongoose';
import { Consoles } from 'src/consoles/models/consoles.modules';

export interface Games extends Document {
  name: string;
  describe: string;
  dataRelease: Date;
  website: string;
  gender: 'Male' | 'Female';
  consoles: Consoles;
}
