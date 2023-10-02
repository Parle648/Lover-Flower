type Props = {
    types: {
        value: string[],
    }, 
    sortBy: {
        value: string,
    }, 
    props: {
        value: [],
    }, 
}

export default async function getCurrentProducts ({types, sortBy, props}: Props) {

    const bd = JSON.stringify({
        types: types.value, 
        sortBy: sortBy.value, 
        props: props.value
    });

    const request = fetch('http://localhost:5000/api/products/currentProducts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: bd
    });

    return (await request).json();
};