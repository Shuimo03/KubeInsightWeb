export default async function POST(request: Request) {
    try{
        const response = await fetch(request.url, {
            method: request.method,
            headers: request.headers,
            body: request.body
        });
        const data =  response;
        if(data.status !== 200){
            const data = await response.json();
            throw new Error(data.error);
        }
        return response;
    }catch(error){
        throw error; 
    }
}
