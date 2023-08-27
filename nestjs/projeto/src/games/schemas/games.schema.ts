import * as mongoose from 'mongoose';
import { ConsolesSquemas } from 'src/consoles/schemas/consoles.schemas';
import { DevelopersSquemas } from 'src/developer/schemas/developers.schema';

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
  developer: [DevelopersSquemas],
  gender: {
    type: String,
  },
  consoles: [ConsolesSquemas],
});
