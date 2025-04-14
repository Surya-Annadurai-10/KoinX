import React from "react";
import { data } from "../data";
import right from "../assets/right.png"
import { BsArrowRight } from "react-icons/bs";

const FAQ = () => {
  return (
    <section className=" w-full px-5 pb-5 lg:px-20  bg-[#eff2f5]">
      <div className="md:w-[66%] p-8 md:p-10 bg-white  rounded-2xl">
        <h1 className="lg:text-[25px] text-[20px]  font-bold">
          Frequently Asked Questions
        </h1>
        {data.map((ele, i) => {
          if (i == 3) {
            return (
              <div
                className="border-b-2 border-b-[#e3e3e3]  pb-7"
                key={`${ele}_${i}`}
              >
                <h1 className="lg:text-xl md:text-[15px] py-5 font-bold">
                  {ele.Q}
                </h1>

                <p className=" md:text-[13px] lg:text-[14px] ">{ele.A.sub}</p>

                <ul>
                  {ele.A.points.map((element, i) => {
                    return (
                      <li className=" md:text-[13px] lg:text-[14px] py-2">
                        &#x2022;{" "}
                        <strong className="text-[black]">
                          {element.heading}
                        </strong>
                        {element.content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          } else if (i == 10) {
            return (
              <div
                className="border-b-2 border-b-[#e3e3e3]  pb-7"
                key={`${ele}_${i}`}
              >
                <h1 className="lg:text-xl md:text-[15px] py-5 font-bold">
                  {ele.Q}
                </h1>
                <p className=" md:text-[13px] lg:text-[14px] ">{ele.A}</p>
                <pre className=" md:text-[13px] lg:text-[14px] ">{ele.B}</pre>
              </div>
            );
          } else {
            return (
              <div
                className="border-b-2 border-b-[#e3e3e3]  pb-7"
                key={`${ele}_${i}`}
              >
                <h1 className="lg:text-xl md:text-[15px] py-5 font-bold">
                  {ele.Q}
                </h1>
                <p className=" md:text-[13px] lg:text-[14px] ">{ele.A}</p>
              </div>
            );
          }
        })}

        <p className=" md:text-sm lg:text-[14px] pt-4">
          Still have doubts?{" "}
          <a
            className="text-[#0052fe]  underline font-bold underline-offset-3"
            href="#"
          >
            Consult with a crypto taxation expert
          </a>
        </p>
      </div>
      <section className="w-[100%] h-[60vh] my-5 flex p-7 md:hidden lg:p-15 items-center justify-center flex-col gap-5 rounded-2xl bg-[#0052fe]">
        <img className="w-[180px]" src={right} alt="" />
        <h1 className="lg:text-[28px] text-[22px] text-center font-bold text-white ">
       Track your portfolio & taxes
        </h1>
        <p className="text-center md:text-[12px] lg:text-[14px] leading-7 tracking-wide text-[13px] text-white">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports
        </p>
        <button className="flex items-center md:text-sm lg:text-xl bg-white px-7 lg:px-7 py-2  lg:py-3 rounded-md font-bold  justify-center gap-3">
          <p className="whitespace-nowrap">Sign up at KoinX for free</p>
          <BsArrowRight style={{ fontSize: "1.5rem" }} />
        </button>
      </section>
    </section>
  );
};

export default FAQ;
