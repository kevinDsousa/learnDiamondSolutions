import { Document } from 'mongoose';
import { Consoles } from 'src/consoles/models/consoles.modules';
import { Developers } from 'src/developer/models/developers.modules';

export interface Games extends Document {
  name: string;
  describe: string;
  dataRelease: Date;
  website: string;
  developer: Developers[];
  gender: string;
  urlCover: string;
  consoles: Consoles[];
}
