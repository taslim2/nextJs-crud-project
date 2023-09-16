"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSingleProduct, updateProductInfo } from "../../../../lib/apiRequests";

export default function EditProduct({searchParams}) {

    const [product, setProduct] = useState({ name: '', price: '', src: '' });
    const router = useRouter();
    const id = searchParams['id'];
    useEffect(()=> {
        (async ()=>{
            let res = await getSingleProduct(id);
            setProduct(res['product']);
        })()
    },[]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await updateProductInfo(product);
        alert(res['message']);
        router.push('/products');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-96 gap-3 mx-auto mt-5">
                <label className="text-2xl text-center font-bold">Edit Product info</label>
                <input onChange={(e) => setProduct({ ...product, name: e.target.value })} value={product['name']} className="py-2 px-5 rounded" type="text" placeholder="Enter product name" />
                <input onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product['price']} className="py-2 px-5 rounded" type="number" placeholder="Enter product price" />
                <input onChange={(e) => setProduct({ ...product, src: e.target.value })} value={product['src']} className="py-2 px-5 rounded" type="text" placeholder="Enter product image link" />
                <button className="bg-green-700 py-2 rounded-xl text-white font-bold" type="submit">Save</button>
            </form>
        </div>
    );
}