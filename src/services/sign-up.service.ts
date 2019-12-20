import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MemberModel } from "src/app/models/member-model";

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class SignUpService {
  constructor(private HTTP: HttpClient) {}

  createMember(body): Observable<MemberModel> {
    return this.HTTP.post<MemberModel>(API_URL + "/createUser", {
      ...body
    });
  }
}
