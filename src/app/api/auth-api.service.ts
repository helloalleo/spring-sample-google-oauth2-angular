import { Injectable } from '@angular/core';
import {BaseApiService} from "./base-api.service";
import {ApiConstants} from "./api-constants";

@Injectable()
export class AuthApiService {

  constructor(private apiService: BaseApiService) { }

  getUser() {
    return this.apiService.get(ApiConstants.USER_URL);
  }

  logout() {
    return this.apiService.post(ApiConstants.LOGOUT_URL, {});
  }
}
