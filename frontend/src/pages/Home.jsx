import React from "react";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import About from "../components/About/About";
import ServicesList from "../components/services/ServicesList";
import featureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png"
import DoctorsList from "../components/Doctors/DoctorsList";
import FaqList from "../components/faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
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
      {/* hero section end */}
      <section className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Providing the best medical service
          </h2>
          <p className="text__para text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            enim aut magni delectus deleniti deserunt?
          </p>
        </div>
        <div className="flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] justify-between">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-zinc-800 font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-zinc-500 font-[400] text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore autem sapiente quia aspernatur commodi sint modi
                  asperiores at excepturi! Cumque?
                </p>
                <Link className="w-[44px] h-[44px] rounded-full border border-solid border-zinc-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-500 hover:border-none" to="/doctors">
                    <ArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-zinc-800 font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-zinc-500 font-[400] text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore autem sapiente quia aspernatur commodi sint modi
                  asperiores at excepturi! Cumque?
                </p>
                <Link className="w-[44px] h-[44px] rounded-full border border-solid border-zinc-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-500 hover:border-none" to="/doctors">
                    <ArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-zinc-800 font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-zinc-500 font-[400] text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore autem sapiente quia aspernatur commodi sint modi
                  asperiores at excepturi! Cumque?
                </p>
                <Link className="w-[44px] h-[44px] rounded-full border border-solid border-zinc-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-500 hover:border-none" to="/doctors">
                    <ArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About/>
      {/* service section start */}
      <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px]">
            <h2 className="heading text-center">Our Medical Service</h2>
            <p className="text__para text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, neque.
            </p>
          </div>
          <ServicesList/>
        </div>
      </section>
      {/* service section end */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* feature content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br/> anytime
              </h2>
              <ul className="pt-4">
                  <li className="text_para">
                    1. Schedule the appointment directly
                  </li>
                  <li className="text_para">
                    2. Lorem ipsum dolor sit amet consectetur.
                  </li>
                  <li className="text_para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quos.
                  </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* feature image */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-zinc-800 font-[600]">Tue, 24</p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-zinc-500 font-[400]">10:00</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-500 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg-py-[60px] lg:px-[10px] text-[8px] leading-[8px] lg:leading-4 text-blue-500 font-[500] mt-2 lg:mt-4">
                    consultation
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
      {/* our great doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum hic accusantium possimus velit perspiciatis?</p>
          </div>
          <DoctorsList/>
        </div>
      </section>
      {/* our great doctors */}
      {/* faq section */}
      <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/2 hidden md:block">
                <img src={faqImg} alt="" />
              </div>
              <div className="w-full md:w-1/2">
                  <h2 className="heading">Most question by our beloved Patients</h2>
                  <FaqList/>
              </div>
            </div>
          </div>
      </section>
      {/* testimonial start */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What our patient say
            </h2>
            <p className="text__para text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, itaque?</p>
          </div>
          <Testimonial/>
        </div>
      </section>
      {/* testimonial end */}
    </>
  );
};

export default Home;
