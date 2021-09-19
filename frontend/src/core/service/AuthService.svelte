<script lang="ts" context="module">
  import { getContext } from "svelte";
  import { API } from "../api/Api.svelte";

  import { authState } from "../store/AuthState.svelte";

  const stubToken = "c29iYWthMTc=";
  const asyncStub = async () => new Promise((res) => setTimeout(res, 500));

  export class AuthService {
    _api = getContext<API>(API);

    async login(username: string, password: string): Promise<void> {
      await asyncStub();
      localStorage.setItem("token", stubToken);
      authState.update((state) => ({ ...state, token: stubToken }));
      // try {
      //   await this._api.get("/login");
      // } catch (e) {
      //   alert(e);
      // }
    }

    async logout(): Promise<void> {
      localStorage.removeItem("token");
      authState.update((state) => ({ ...state, token: null }));
    }
  }
</script>
