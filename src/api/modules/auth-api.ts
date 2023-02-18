import {ApiModel} from "api/api-model";
import {ApiRoutes} from "ts/enum";

export class AuthApi extends ApiModel{
  async login(payload: object) {
    return await this.http.post(ApiRoutes.Login, payload);
  }
}
