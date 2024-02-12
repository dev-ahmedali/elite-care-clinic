import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccrodion = () => {
    setIsOpen(true);
  };
  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccrodion}>
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-zinc-800">
          {item.question}
        </h4>
        <div
          className={`${isOpen && "bg-blue-500 text-white border-none"} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex justify-center`}>
            {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}
          </div>
      </div>
      {isOpen && <div className="mt-4">
        <p className="text-[14px] leading-6 lg:text-[16px] font-[400] text-zinc-500">{item.content}</p>
        </div>}
    </div>
  );
};

export default FaqItem;
