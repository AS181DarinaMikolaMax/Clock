export class API {
  _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  _commonFetch(path: string, { body, headers, method }: RequestInit) {
    return fetch(`${this._baseUrl}${path}`, {
      body,
      headers: { ...headers, "Content-Type": "application/json" },
      method,
    });
  }

  async post(path: string, { body, headers }: RequestInit = {}): Promise<any> {
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
