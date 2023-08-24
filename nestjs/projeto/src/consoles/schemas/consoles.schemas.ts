import * as mongoose from 'mongoose';

export const ConsolesSquemas = new mongoose.Schema({
  name: {
    type: String,
  },
  dataRelease: {
    type: Date,
  },
  website: {
    type: String,
  },
  company: {
    type: String,
  },
});
