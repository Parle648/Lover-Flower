export default async function getCurrentProducts ({types, sortBy, props}) {

    const bd = JSON.stringify({
        types: types.value, 
        sortBy: sortBy.value, 
        props: props.value
    });

    console.log(bd);
    
    
    const request = fetch('http://localhost:5000/api/products/currentProducts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: bd
    });

    return (await request).json();
};