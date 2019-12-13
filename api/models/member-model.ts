export interface memberModel {
  memberUsername: StringConstructor;
  memberPassword: StringConstructor;
  memberFirstName: StringConstructor;
  memberLastName: StringConstructor;
  memberAge: NumberConstructor;
  memberType: memberType;
  memberGender: memberGender;
  memberGenderInterestedIn: memberGenderInterestedIn;
  memberBio: StringConstructor;
  memberActive: BooleanConstructor;
  required: string;
}

export interface memberType {
  type: typeMember[];
  default: TYPE_MEMBER[];
}

export interface typeMember {
  type: StringConstructor;
  enum: typeof TYPE_MEMBER;
}

export enum TYPE_MEMBER {
  MATCHEE = "matchee",
  MATCHER = "matcher"
}

export interface memberGender {
  type: typeGender[];
  default: TYPE_GENDER[];
}

export interface memberGenderInterestedIn {
  type: typeGender[];
  default: TYPE_GENDER[];
}

export interface typeGender {
  type: StringConstructor;
  enum: typeof TYPE_GENDER;
}

export enum TYPE_GENDER {
  MALE = "male",
  FEMALE = "female",
  NONBINARY = "non-binary"
}
