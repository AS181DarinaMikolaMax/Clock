import authState from "../store/authState";

const stubToken = 'c29iYWthMTc='
const asyncStub = async () => new Promise(res => setTimeout(res, 500));
export default class AuthService {
    async login(username, password)  {
        await asyncStub();
        localStorage.setItem('token', stubToken);
        authState.update((state) => ({...state, token: stubToken}))
    }

    async logout() {
        localStorage.removeItem('token');
        authState.update((state) => ({...state, token: null}))
    }
}