/* import { Schema, model } from "mongoose";

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
    type: String,
    required: "Member type is required to sign-up"
  },
  memberGender: {
    type: String,
    required: "Gender is required to sign-up"
  },
  memberGenderInterestedIn: {
    type: String,
    required: "Gender interest is required to sign-up"
  },
  memberActive: {
    type: Boolean,
    default: true
  }
});

export const Member = model("Member", memberSchema);

//Gender
const genderSchema = new Schema({
  genderName: {
    type: String
  }
});

export const Gender = model("Gender", genderSchema);

/* const male = new Gender({ genderName: 'Male'});
const female = new Gender({ genderName: 'Female'});
const male = new Gender({ genderName: 'Non-binary'});
 */

/*export const matchesSchema = new Schema({
  baseMemberUsername: {
    type: String
    //where would we relate fields?
  },
  matchMemberUsername: {
    type: String
    //relate field
  }
});

export const Match = model("match", matchesSchema);

export const profileSchema = new Schema({
  memberUsername: {
    type: String
    //relate
  },
  memberBio: {
    type: String //where to enter character limit?
  },
  memberAge: {
    type: Number
    //relate
  }
}); */