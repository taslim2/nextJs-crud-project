import { getAllProducts } from "../../../lib/apiRequests";

export default async function Gallary() {
    let response = await getAllProducts();
    
    return (
        <div>
            <div>
                <p className="text-3xl text-center p-5">Our products gallary</p>
            </div>
            <div className="grid gap-3 grid-cols-3 mx-10">
                {/* product pic container */}
                {response.map((product, i) => {
                    return (
                        <div key={i}>
                            <img className="w-96 h-96" src={product['src']} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}