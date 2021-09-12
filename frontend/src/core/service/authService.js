import authState, { initialState } from "../store/authState";

const stubToken = 'token'
export default class AuthService {
    async login(username, password)  {
        await new Promise(res => setTimeout(res, 500));
        authState.set({username: username, token: stubToken,});
    }

    async logout() {
        authState.set(initialState());
    }
}