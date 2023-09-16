"use client"

import { useState } from "react";
import { addNewProduct } from "../../../../lib/apiRequests";
import { useRouter } from "next/navigation";

export default function NewProduct() {

    const [newProduct, setNewProduct] = useState({ name: '', price: '', src: '' });

    let router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await addNewProduct(newProduct);
        alert(res['message']);
        router.push('/products');
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-96 gap-3 mx-auto mt-5">
                <label className="text-2xl text-center font-bold">Add Product info</label>
                <input onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} value={newProduct['name']} className="py-2 px-5 rounded" type="text" placeholder="Enter product name" />
                <input onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} value={newProduct['price']} className="py-2 px-5 rounded" type="number" placeholder="Enter product price" />
                <input onChange={(e) => setNewProduct({ ...newProduct, src: e.target.value })} value={newProduct['src']} className="py-2 px-5 rounded" type="text" placeholder="Enter product image link" />
                <button className="bg-green-700 py-2 rounded-xl text-white font-bold" type="submit">Save</button>
            </form>
        </div>
    );
}