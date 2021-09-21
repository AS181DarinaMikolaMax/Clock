<script context="module" lang="ts">
  const baseUrl = "http://localhost:8080";

  export class API {
    _commonFetch(path: string, { body, headers, method }: RequestInit) {
      return fetch(`${baseUrl}${path}`, {
        body,
        headers: { ...headers, "Content-Type": "application/json" },
        method,
      });
    }

    async post(
      path: string,
      { body, headers }: RequestInit = {}
    ): Promise<any> {
      const response = await this._commonFetch(path, {
        body,
        headers,
        method: "POST",
      });
      return response.json();
    }

    async get(
      path: string,
      { headers }: Pick<RequestInit, "headers"> = {}
    ): Promise<any> {
      const response = await this._commonFetch(path, { headers });
      return response.json();
    }
  }
</script>
