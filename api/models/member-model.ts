export interface MemberModel {
  memberUsername: String;
  memberPassword: String;
  memberFirstname: String;
  memberLastname: String;
  memberAge: Number;
  memberGender: MemberGender;
  memberGenderInterestedIn: MemberGenderInterestedIn;
  memberBio: String;
  memberActive: Boolean;
  required: string;
}

export interface MemberType {
  type: TypeMember[];
  default: TYPE_MEMBER[];
}

export interface TypeMember {
  type: String;
  enum: typeof TYPE_MEMBER;
}

export enum TYPE_MEMBER {
  MATCHEE = "matchee",
  MATCHER = "matcher"
}

export interface MemberGender {
  type: TypeGender[];
  default: TYPE_GENDER[];
}

export interface MemberGenderInterestedIn {
  type: TypeGender[];
  default: TYPE_GENDER[];
}

export interface TypeGender {
  type: String;
  enum: typeof TYPE_GENDER;
}

export enum TYPE_GENDER {
  MALE = "male",
  FEMALE = "female",
  NONBINARY = "non-binary"
}
