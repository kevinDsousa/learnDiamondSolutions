import * as mongoose from 'mongoose';

export const DevelopersSquemas = new mongoose.Schema({
  name: {
    type: String,
  },
  dataFoundation: {
    type: Date,
  },
  website: {
    type: String,
  },
  headquarters: {
    type: String,
  },
});
