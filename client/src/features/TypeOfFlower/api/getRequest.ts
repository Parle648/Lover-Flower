export default async function getProducts(string: string): Promise<any> {
    try {
        const request = fetch(`http://localhost:5000/api/products/type/:${string}`);
        return (await request).json();
    }
    catch (err) {
        console.error(err);
    }
}

export async function getAllProducts(string: string): Promise<any> {
    try {
        const request = fetch(`http://localhost:5000/api/products/`);
        return (await request).json();
    }
    catch (err) {
        console.error(err);
    }
}