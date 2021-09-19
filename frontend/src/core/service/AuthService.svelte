<script lang="ts" context="module">
  import { authState } from "../store/AuthState.svelte";

  const stubToken = "c29iYWthMTc=";
  const asyncStub = async () => new Promise((res) => setTimeout(res, 500));

  export class AuthService {
    async login(username: string, password: string): Promise<void> {
      await asyncStub();
      localStorage.setItem("token", stubToken);
      authState.update((state) => ({ ...state, token: stubToken }));
    }

    async logout(): Promise<void> {
      localStorage.removeItem("token");
      authState.update((state) => ({ ...state, token: null }));
    }
  }
</script>
