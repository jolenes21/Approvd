import { Members } from "../models/member-model";
import { Matches } from "../models/match-model";

export const getAllMembers = (req: any, res: any) => {
  Members.findById({}); //<<--Do I need to add member parameter
};

export const getMember = (req: any, res: any) => {
  Members.findById(req.params.memberUsername);
};

export const createMember = (req: any, res: any) => {
  const newMember = new Members({
    memberUsername: req.body.memberUsername,
    memberPassword: req.body.memberPassword,
    memberFirstname: req.body.memberFirstname,
    memberLastname: req.body.memberLastname,
    memberAge: req.body.memberAge,
    memberType: req.body.memberType,
    memberGender: req.body.memberGender,
    memberBio: req.body.memberBio,
    memberActve: req.body.memberActve
  });
};

export const updateMember = (req: any, res: any) => {
  Members.findOneAndUpdate({ _id: req.params.memberId }, req.body, {
    new: true
  });
};

export const deleteMember = (req: any, res: any) => {
  Members.deleteOne({ _id: req.params.memberId });
};

export const matchMember = (req: any, res: any) => {
  const newMatch = new Matches({
    baseMemberUsername: req.body.baseMemberUsername,
    matchMemberPassword: req.body.matchMemberUsername
  });
};
