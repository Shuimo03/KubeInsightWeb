const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function POST(username: string, password: string) {
    try {
        const url = apiBaseUrl+'/v1/iam/login'; 
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (response.status !== 200) {
            const data = await response.json();
            throw new Error(data.error);
        }

        return response;
    } catch (error) {
        throw error;
    }
}
