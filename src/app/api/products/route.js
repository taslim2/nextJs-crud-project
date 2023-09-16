import { NextResponse } from "next/server";

let productsList = [
    { id: 1, name: "Samsung m21", price: 21000, src: "https://www.mobiledokan.co/wp-content/uploads/2019/12/Samsung-Galaxy-M21-Midnight-Blue.jpg" },
    { id: 2, name: "Dell Laptop", price: 61000, src: "https://www.notebookcheck.net/typo3temp/_processed_/c/7/csm_61leFRNz-yL._SL1500__02_407292929e.jpg" },
    { id: 3, name: "Nokia 105", price: 900, src: "https://www.reddokan.com/wp-content/uploads/2021/04/Nokia-106.jpg" }
];

export default productsList;

export async function GET() {

    return NextResponse.json(productsList);
}

export async function POST(request) {
    let data = await request.json();
    let newEntity = data['newProduct'];
    let newProduct = { id: productsList.length+1, name: newEntity['name'], price: newEntity['price'], src: newEntity['src'] };
    productsList.push(newProduct);

    return NextResponse.json({ status: true, message: "Product added successful", productsList })
}

export async function DELETE(request) {
    let data = await request.json();
    let id = data['id'];
    productsList = productsList.filter(product => product.id !== id);
    return NextResponse.json({message: "delete success",productsList});
}

