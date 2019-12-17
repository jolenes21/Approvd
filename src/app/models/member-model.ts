export interface MemberModel {
  memberUsername: string;
  memberPassword: string;
  memberFirstname: string;
  memberLastname: string;
  memberAge: number;
  memberGender: TYPE_GENDER;
  memberGenderInterestedIn: TYPE_GENDER;
  memberBio: string;
  memberActive: boolean;
  required: string;
}

export enum TYPE_MEMBER {
  MATCHEE = "matchee",
  MATCHER = "matcher"
}

export enum TYPE_GENDER {
  MALE = "male",
  FEMALE = "female",
  NONBINARY = "non-binary"
}
