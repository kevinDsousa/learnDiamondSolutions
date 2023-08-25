import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

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
    type: Schema.Types.ObjectId,
    ref: 'Developer',
  },
  gender: {
    type: String,
  },
  consoles: {
    type: Schema.Types.ObjectId,
    ref: 'Console',
  },
});
