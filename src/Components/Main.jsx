import React, { useEffect, useState } from "react";
import aus from "../assets/australiaflag.png";
import { FaCheck } from "react-icons/fa6";
import right from "../assets/right.png";
import { BsArrowRight } from "react-icons/bs";
import FAQ from "./FAQ";

const Main = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  // const [annualIncome , setAnnualIncome] = useState("");
  const [taxRate, setTaxRate] = useState("0%");
  const [gains, setGains] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [netGains, setNetGains] = useState(0);
  const [taxPayable, setTaxPayable] = useState(0);
  const [isLongTerm, setIsLongTerm] = useState(true);

  useEffect(() => {
    if (purchasePrice != 0 && salesPrice != 0 && expenses != 0) {
      let discount;
      let gains = salesPrice - purchasePrice - expenses;
      if (gains > 0) {
        discount = gains / 2;
      } else {
        discount = 0;
      }
      setDiscount(discount);
      setGains(gains);
    }
  }, [purchasePrice, salesPrice, expenses]);

  useEffect(() => {
    if (gains != 0) {
      let net;

      if (isLongTerm) {
        net = gains;
      } else {
        net = gains - discount;
      }
      let taxToPay;

      if (taxRate == "Nil + 19% of excess over $18200") {
        taxToPay = (19 * net) / 100;
      } else if (taxRate == "$5,902 + 32.5% of excess over $45,000") {
        taxToPay = (32.5 * net) / 100;
      } else if (taxRate == "$29,467 + 37% of excess over $120,000") {
        taxToPay = (37 * net) / 100;
      } else if (taxRate == "$51,667 + 45% of excess over $180,000") {
        taxToPay = (45 * net) / 100;
      } else if (taxRate == "0%") {
        taxToPay = 0;
      }

      setNetGains(net);
      setTaxPayable(Math.abs(taxToPay));
    }
  }, [gains,isLongTerm ,taxRate]);

  return (
    <main className="w-full bg-[#eff2f5] px-20 py-7 flex items-start justify-between">
      <section className="w-[66%] p-8 px-23 rounded-2xl min-h-[90vh] bg-white ">
        <h1 className="capitalize font-bold pb-7 text-[35px]  text-center ">
          Free crypto tax calculator australia
        </h1>
        <div className="w-full flex pb-8 pt-2 border-b-2 border-[#eaeaea] items-center justify-between ">
          <div className="flex gap-3 items-center justify-center">
            <h1 className="text-xl">Financial Year</h1>

            <div className="w-[230px] px-2 rounded h-[50px] bg-[#eff2f5]">
              <select
                className="w-full text-xl h-full outline-none"
                name=""
                id=""
              >
                <option value="">FY 2023-2024</option>
              </select>
            </div>
          </div>
          <div className="flex  gap-3  items-center justify-center">
            <h1 className="text-xl">Country</h1>
            <div className="w-[280px] flex items-center justify-center px-2 rounded h-[50px] bg-[#eff2f5]">
              <img className="w-[50px]" src={aus} alt="" />

              <select
                className="w-full h-full text-xl outline-none "
                name=""
                id=""
              >
                <option value="">Australia</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full flex py-8   items-center justify-between ">
          <div className=" gap-3 ">
            <h1 className="text-xl mb-2">Enter purchase price of Crypto</h1>

            <div className="w-[350px] flex items-center justify-center gap-2  px-2 rounded h-[50px] bg-[#eff2f5]">
              <h1 className="text-xl">&#36;</h1>
              <input
                placeholder="0"
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="w-full appearance-none  text-xl h-full outline-none"
                type="number"
                value={purchasePrice}
              />
            </div>
          </div>
          <div className=" gap-3 ">
            <h1 className="text-xl mb-2">Enter sale price of Crypto</h1>

            <div className="w-[350px] flex items-center justify-center gap-2  px-2 rounded h-[50px] bg-[#eff2f5]">
              <h1 className="text-xl">&#36;</h1>
              <input
                placeholder="0"
                className="w-full appearance-none  text-xl h-full outline-none"
                type="number"
                value={salesPrice}
                onChange={(e) => setSalesPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex pb-8 pt-2  items-start justify-between ">
          <div className=" gap-3 ">
            <h1 className="text-xl mb-2">Enter your Expenses</h1>

            <div className="w-[350px] flex items-center justify-center gap-2  px-2 rounded h-[50px] bg-[#eff2f5]">
              <h1 className="text-xl">&#36;</h1>
              <input
                placeholder="0"
                className="w-full appearance-none  text-xl h-full outline-none"
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              />
            </div>
          </div>

          <div className=" gap-3  ">
            <h1 className="text-xl mb-2">Investment Type</h1>

            <div className="w-[350px] flex items-center justify-between gap-2  rounded h-[50px] ">
              <div
                onClick={() => setIsLongTerm(true)}
                className={`flex border-2 cursor-pointer ${
                  isLongTerm
                    ? "border-[#0052fe] text-[#0052fe]"
                    : "border-[#000] text-[#000]"
                } rounded-md gap-3 text-xl w-[48%] h-full  items-center justify-center`}
              >
                <h1>Short Term</h1>
                <FaCheck
                  style={{ color: `${isLongTerm ? "#0052fe" : "#fff"}` }}
                />
              </div>

              <div
                onClick={() => setIsLongTerm(false)}
                className={`flex cursor-pointer border-2 ${
                  !isLongTerm
                    ? "border-[#0052fe] text-[#0052fe]"
                    : "border-[#000] text-[#000]"
                } rounded-md gap-3 text-xl w-[48%] h-full  items-center justify-center`}
              >
                <h1>Long Term</h1>
                <FaCheck
                  style={{ color: `${!isLongTerm ? "#0052fe" : "#fff"}` }}
                />
              </div>
            </div>
            <div className="flex items-center py-1 justify-between text-xl">
              <div className="w-[50%]">
                <p className="text-md">{"<"}12 months</p>
              </div>
              <div className="w-[50%] px-2">
                <p className="text-md">{">"}12 months</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex pb-8 pt-2  items-start justify-between ">
          <div className=" gap-3 ">
            <h1 className="text-xl mb-2">Select Your Annual Income</h1>

            <div className="w-[350px] flex items-center justify-center gap-2  px-2 rounded h-[50px] bg-[#eff2f5]">
              <select
                onChange={(e) => setTaxRate(e.target.value)}
                value={taxRate}
                className="w-full text-xl outline-none h-full "
                name=""
                id=""
              >
                <option value="0%">&#36;0 - &#36;18200 </option>
                <option value="Nil + 19% of excess over $18200">
                  &#36;18201 - &#36;45,000{" "}
                </option>
                <option value="$5,902 + 32.5% of excess over $45,000">
                  &#36;45,001 - &#36;120,000{" "}
                </option>
                <option value="$29,467 + 37% of excess over $120,000">
                  &#36;120,001 - &#36;180,000{" "}
                </option>
                <option value="$51,667 + 45% of excess over $180,000">
                  &#36;180,001+{" "}
                </option>
              </select>
            </div>
          </div>

          <div className=" gap-3  ">
            <h1 className="text-xl mb-2">Tax rate</h1>
            <div className="w-[350px] flex items-center justify-between gap-2  rounded h-[50px] ">
              <h1 className="text-xl">{taxRate}</h1>
            </div>
          </div>
        </div>

        {isLongTerm ? null : (
          <>
            <div className="w-full flex py-8   items-center justify-between ">
              <div className=" gap-3 ">
                <h1 className="text-xl mb-2">Capital Gains amount</h1>

                <div className="w-[350px] flex items-center justify-center gap-2  px-2 rounded h-[50px] bg-[#eff2f5]">
                  <div className="w-full  gap-2 px-2 flex items-center justify-start text-xl h-full outline-none">
                    <h1 className="text-xl">&#36;</h1>
                    <h1 className="text-xl">{gains}</h1>
                  </div>
                </div>
              </div>
              <div className=" gap-3 ">
                <h1 className="text-xl mb-2">Discount for long term gains</h1>

                <div className="w-[350px] flex items-center justify-center gap-2  px-2 rounded h-[50px] bg-[#eff2f5]">
                  <div className="w-full flex gap-2 px-2 items-center justify-start  text-xl h-full outline-none">
                    <h1 className="text-xl">&#36;</h1>
                    <h1 className="text-xl">{discount}</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="w-full flex py-8   items-center justify-between ">
          <div className=" gap-3 w-[350px] flex items-center justify-center flex-col rounded h-[120px] bg-[#ebf9f4]">
            <h1 className="text-xl">Net Capital gains tax amount</h1>
            <div className="text-3xl text-[#1cbe8a] font-bold flex items-center justify-center gap-2">
              <h1 className="text-3xl">&#36;</h1>
              <h1>{netGains}</h1>
            </div>
            <h1></h1>
          </div>
          <div className="  gap-3 w-[350px] flex items-center justify-center flex-col rounded h-[120px] bg-[#ebf2ff]">
            <div className="w-[350px] flex flex-col items-center justify-center gap-2  px-2 rounded h-[50px] bg-[#ebf2ff]">
              <h1 className="text-xl">The tax you need to pay*</h1>

              <div className="w-full text-[#0141cf] flex gap-2 px-2 items-center justify-center font-bold  text-3xl h-full outline-none">
                <h1>&#36;</h1>
                <h1>{taxPayable}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[32%] h-[80vh] flex p-15 items-center justify-center flex-col gap-5 rounded-2xl bg-[#0052fe]">
        <h1 className="text-[28px] text-center font-bold text-white ">
          Get Started with KoinX for FREE
        </h1>
        <p className="text-center leading-7 tracking-wide text-[14px] text-white">
          With our range of featues that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports
        </p>
        <img className="w-[250px]" src={right} alt="" />
        <button className="flex items-center text-xl bg-white px-7 py-3 rounded-md font-bold  justify-center gap-3">
          <p>Get Started For Free</p>
          <BsArrowRight style={{ fontSize: "1.5rem" }} />
        </button>
      </section>
   
    </main>
  );
};

export default Main;
