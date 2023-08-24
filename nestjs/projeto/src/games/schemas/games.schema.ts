import * as mongoose from 'mongoose';
import { ConsolesSquemas } from '../../consoles/schemas/consoles.schemas';
import { DevelopersSquemas } from '../../developer/schemas/developers.schema';

export const GamesSquemas = new mongoose.Schema({
  name: {
    type: String,
  },
  describe: {
    type: String,
  },
  dataRelease: {
    type: Date,
  },
  website: {
    type: String,
  },
  developer: {
    type: DevelopersSquemas,
  },
  gender: {
    type: String,
  },
  consoles: {
    type: ConsolesSquemas,
  },
});
