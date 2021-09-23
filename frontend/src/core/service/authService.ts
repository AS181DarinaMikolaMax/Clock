import authApi from "../api/authApi";

import { authState } from "../store/authState";

const stubToken = "c29iYWthMTc=";
const asyncStub = async () => new Promise((res) => setTimeout(res, 500));

export class AuthService {
  _api = authApi;

  async login(username: string, password: string): Promise<void> {
    await asyncStub();
    localStorage.setItem("token", stubToken);
    const response = await this._api.post("/login", {
      body: JSON.stringify({ username, password }),
    });
    if (response.token)
      authState.update((state) => ({ ...state, token: stubToken }));
  }

  async logout(): Promise<void> {
    localStorage.removeItem("token");
    authState.update((state) => ({ ...state, token: null }));
  }
}
