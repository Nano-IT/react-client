import Http from "nanoit-react-modules/services/http";

export class ApiModel {
  public http: Http;

  constructor() {
    this.http = new Http().setBaseUrl("https://shoply-api.nanoit.dev/api/");
  }
}
