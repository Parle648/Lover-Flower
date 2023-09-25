import { json } from "stream/consumers"

export async function increased(types: string, params: string[]) {
    const request = fetch(`http://localhost:5000/api/products/getSortedByIncreasing/`, {
        method: 'post',
        body: JSON.stringify({types, params}),
    })
    return (await request).json
};

export async function decreased(types: string, params: string[]) {
    const request = fetch('http://localhost:5000/api/products/getSortedByDecreasing', {
        method: 'post',
        body: JSON.stringify({types, params}),
    })
    return (await request).json
};