import { Schema, model } from "mongoose";

//Match
const matchSchema = new Schema({
  baseMemberUsername: {
    type: String
  },
  matchMemberUsername: {
    type: String
  }
});

export const Matches = model("Match", matchSchema);
