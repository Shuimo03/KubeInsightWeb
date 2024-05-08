// Cors.tsx
import loginApi from "../api/login";
import React from 'react';

export default function Cors() {
    const fetchData = async () => {
        try {
            console.log("Cors.tsx");
            const request = new Request("http://localhost:8080/v1/iam/cors");
            const resp = await loginApi(request);
            console.log("Resp:",resp);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <div>
            {}
        </div>
    );
}
