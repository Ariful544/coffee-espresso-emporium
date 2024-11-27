import { Card } from "flowbite-react";
import img from '../assets/images/1.png'
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <div>
            <Link to="/coffees/view-details">
                <Card className="w-full" imgSrc={img} horizontal>
                    <div className="flex items-center gap-8">
                        <div className="flex-1 font-raleway text-xl">
                            <p className="text-neutral-500"><span className="text-[#3C393B] font-semibold">Name: </span>Americano Coffee</p>
                            <p className="text-neutral-500"><span className="text-[#3C393B] font-semibold">Chef: </span>Mrs. Morisha</p>
                            <p className="text-neutral-500"><span className="text-[#3C393B] font-semibold">Price: </span>890 Taka</p>

                        </div>
                        <div className="flex flex-col gap-4">
                            <Link to="/coffees/view-details" className="btn bg-[#D2B48C] text-lg hover:bg-[#cfab7c] text-white"><FaEye /></Link>
                            <Link to="/coffees/update-coffee" className="btn bg-[#3C393B] text-lg hover:bg-[#2a292a] text-white"><FaPen /></Link>
                            <Link className="btn bg-[#EA4744] text-lg hover:bg-[#dc3b38] text-white"><FaTrash /></Link>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    );
};

export default ProductCard;