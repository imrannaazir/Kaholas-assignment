import { AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";


const Buttons = () => {
    return (
        <div className="flex gap-4">
            <button className='bg-[#503DD4] text-white text-lg font-semibold px-6 py-2 rounded-full flex items-center'>See Class Schedule <AiOutlineRight /></button>
            <button className="text-xl flex items-center font-semibold gap-1 text-[#503DD4]"><AiOutlineHeart />Save</button>
            <button className="text-xl flex items-center font-semibold gap-1 text-[#503DD4]"><RiShareForwardLine /> Share</button>
        </div>
    );
};

export default Buttons;