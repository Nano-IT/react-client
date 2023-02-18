import {AuthApi} from "./modules/auth-api";

const API = {
    auth: () => new AuthApi(),
}

export default API;
