// api/login.ts
export default async function loginApi(request: Request) {
    const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body
    });
    const data = await response.json();
    return data;
}