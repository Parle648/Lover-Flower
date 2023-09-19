export default async function getProducts(): Promise<any> {
    try {
        const request = fetch('http://localhost:5000/api/products');
        return (await request).json();
    }
    catch (err) {
        console.error(err);
    }
}