import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 font-[700] text-zinc-800">{name}</h2>
      <p className="text-[16px] leading-7 font-[400] text-zinc-500">{desc}</p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          className="w-[44px] h-[44px] rounded-full border border-solid border-zinc-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-500 hover:border-none"
          to="/doctors">
          <ArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}>
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
