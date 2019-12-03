import { Schema, model } from "mongoose";

//Member
const memberSchema = new Schema({
  memberUsername: {
    type: String,
    required: "A username is required to sign-up"
  },
  memberPassword: {
    type: String,
    required: "A password is required to sign-up"
  },
  memberFirstName: {
    type: String,
    required: "A first name is required to sign-up"
  },
  memberLastName: {
    type: String,
    required: "A last name is required to sign-up"
  },
  memberAge: {
    type: Number,
    required: "Age is required to sign-up"
  },
  memberType: {
    type: [
      {
        type: String,
        enum: ["matchee", "matcher"]
      }
    ]
  },
  memberGender: {
    type: [
      {
        type: String,
        enum: ["male", "female", "non-binary"]
      }
    ]
  },
  memberGenderInterestedIn: {
    type: [
      {
        type: String,
        enum: ["male", "female", "non-binary"]
      }
    ]
  },
  memberActive: {
    type: Boolean,
    default: true
  }
});

export const Member = model("Member", memberSchema);
