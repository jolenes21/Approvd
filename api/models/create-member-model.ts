import { Schema, model } from "mongoose";
import { memberModel, TYPE_MEMBER, TYPE_GENDER } from "./member-model";

//Member
const memberSchema = new Schema<memberModel>({
  memberUsername: {
    type: String,
    required: "A username is required to sign-up"
  },
  memberPassword: {
    type: String,
    required: "A password is required to sign-up"
  },
  memberFirstname: {
    type: String,
    required: "A first name is required to sign-up"
  },
  memberLastname: {
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
        enum: [TYPE_MEMBER]
      }
    ]
  },
  memberGender: {
    type: [
      {
        type: String,
        enum: [TYPE_GENDER]
      }
    ]
  },
  memberGenderInterestedIn: {
    type: [
      {
        type: String,
        enum: [TYPE_GENDER]
      }
    ]
  },
  memberBio: {
    type: String,
    default: "Tell us about yourself!"
  },
  memberActive: {
    type: Boolean,
    default: true
  }
});

export const Members = model("Member", memberSchema);
