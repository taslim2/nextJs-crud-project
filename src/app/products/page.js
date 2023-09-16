"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProductItem, getAllProducts } from "../../../lib/apiRequests";

export default function Products() {
    const [products, setProducts] = useState();
    const [stateC, setStateC] = useState(true);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            let response = await getAllProducts();
            setProducts(response);
        })()
    }, [stateC]);

    const handleDelete = async (id) => {
        let res = await deleteProductItem(id);
        alert(res['message']);
        setStateC(!stateC);
    };

    const handleEdit = (id) => {
        router.push(`/products/edit?id=${id}`);
    };

    return (
        <div>
            <p className="text-center text-2xl">List of available products</p>
            <Link className="text-2xl p-2 bg-[#ef5de1] rounded-md ml-16" href={'/products/new'}>Add new product?</Link>

            <div className="grid grid-cols-5 mt-5 px-16 gap-2">
                {products?.map((product, i) => {
                    return (
                        <div key={i} className="bg-white w-52 rounded-md p-5">
                            <img className="min-w-[100px] h-52" src={product['src']} />
                            <div className="h-32">
                                <p>{product['name']}</p>
                                <p>{product['price']}/=</p>
                                <div className="flex gap-2 justify-around">
                                    <button onClick={() => handleDelete(product['id'])} className="py-2 px-4 bg-red-500 rounded">Delete</button>
                                    <button onClick={() => handleEdit(product['id'])} className="py-2 px-5 bg-yellow-400 rounded">Edit</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}