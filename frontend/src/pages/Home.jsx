import React from "react";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

const Home = () => {
  return (
    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* hero content */}

          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-zinc-800 font-[800] md:text-[60px] md:leading-[70px]">
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p className="text__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident repellat tenetur voluptate possimus velit. Adipisci
                voluptatibus iste fugit atque nihil corporis quibusdam quis
                error!
              </p>

              <button className="btn hover:bg-indigo-600">
                Booking an Appointment
              </button>
            </div>

            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-zinc-800">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
                <p className="text__para">Years of Experience</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-zinc-800">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"></span>
                <p className="text__para">Clinic Location</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-zinc-800">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-sky-500 rounded-full block mt-[-14px]"></span>
                <p className="text__para">Patient Satisfaction</p>
              </div>
            </div>
          </div>
          {/* hero content */}
          <div className="flex gap-[30px] justify-end">
            <div>
              <img className="w-full" src={heroImg01} alt="" />
            </div>

            <div className="mt-[30px]">
              <img src={heroImg02} alt="" className="w-full mb-[30px]" />
              <img src={heroImg03} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
