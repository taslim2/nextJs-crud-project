export async function getAllProducts() {
    let response = await fetch("http://localhost:3000/api/products", {
        cache: 'no-store'
    });
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function addNewProduct(newProduct) {
    const config = { method: "POST", body: JSON.stringify({ newProduct }), cache: 'no-store' };
    let response = await fetch("http://localhost:3000/api/products", config);
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function deleteProductItem(id) {
    const config = { method: "DELETE", body: JSON.stringify({ id }) };
    let response = await fetch("http://localhost:3000/api/products", config);
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getSingleProduct(id) {
    let response = await fetch(`http://localhost:3000/api/products/edit?id=${id}`);
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function updateProductInfo(updatedProduct) {
    const config = { method: "PUT", body: JSON.stringify({ updatedProduct }), cache: 'no-store' };
    let response = await fetch("http://localhost:3000/api/products/edit", config);
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}