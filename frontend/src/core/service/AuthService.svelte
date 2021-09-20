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
      try {
        const response = await this._api.post("/login");
        console.log("AuthService => login => response", response);
        authState.update((state) => ({ ...state, token: stubToken }));
      } catch (e) {
        alert(e);
      }
    }

    async logout(): Promise<void> {
      localStorage.removeItem("token");
      authState.update((state) => ({ ...state, token: null }));
    }
  }
</script>
