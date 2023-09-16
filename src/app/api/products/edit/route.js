import { NextResponse } from "next/server";
import productsList from "../route";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    let index = productsList.map(product => product['id'].toString()).indexOf(id);

    return NextResponse.json({product:productsList[index]});
}

export async function PUT(request) {
    let data = await request.json();
    let id = data['updatedProduct']['id'];
    // let index = productsList.map(product => product['id'].toString()).indexOf(id);
    let index = productsList.map(product => product['id']).indexOf(id);
    productsList[index]['name'] = data['updatedProduct']['name'];
    productsList[index]['price'] = data['updatedProduct']['price'];
    productsList[index]['src'] = data['updatedProduct']['src'];
    return NextResponse.json({message: "data updated successfully",productsList});
}