/* eslint-disable react/prop-types */
import React from "react";
import startIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const DoctorsCard = ({ doctor }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    totalPatients,
    photo,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-zinc-800 font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-sky-500 py-1 px-2 lg:py-2 lg:px-6 text-[12px] lg:leading-7 font-semibold lg:text-[16] rounded">
          {specialization}
        </span>
        <div className="flex items-center gap-[60px]">
          <span className="flex items-center gap-[6px] text-[14px] lg:leading-6 lg:text-[16px] leading-7 font-semibold text-zinc-800">
              <img src={startIcon} alt="" /> {avgRating}
          </span>
            <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-zinc-500">({totalRating})</span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
          <div>
            <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-zinc-800">+{totalPatients}</h3>
            <p className="text-[14px] leading-6 font-[400] text-zinc-500"> At  {hospital}</p>
          </div>
          <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-zinc-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-500 hover:border-none">
          <ArrowRight className="group-hover:text-white w-6 h-5"/>
          </Link>
      </div>
    </div>
  );
};

export default DoctorsCard;
