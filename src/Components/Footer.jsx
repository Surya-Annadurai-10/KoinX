import React from 'react'
import logowhite from "../assets/logowhite.svg"
import koinXISO from "../assets/koinXISO.webp"
import { PiHandPeaceFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
     <footer className='w-full md:text-sm lg:text-[14px] md:h-[90vh] h-[118vh] bg-black'>
         <div className='lg:w-[75%] w-[90%] h-full m-auto'>
            <div className='flex md:flex-row flex-col h-[16%] md:h-[14%]  items-center justify-evenly md:justify-between border-b-1 border-white'>
               <div className='lg:w-[130px] w-[70px] md:w-[100px]'>
                <img src={logowhite} alt="" />
               </div>
               <div className='flex items-center justify-center gap-4 '>
                 <PiHandPeaceFill style={{color : "#2997f9" , fontSize:"1.5rem"}}/>
                 <FaSquareXTwitter  style={{color : "#2997f9" , fontSize:"1.5rem"}}/>
                 <IoLogoYoutube  style={{color : "#2997f9" , fontSize:"1.5rem"}}/>
                 <FaLinkedin  style={{color : "#2997f9" , fontSize:"1.5rem"}}/>
                 <RiInstagramFill style={{color : "#2997f9" , fontSize:"1.5rem"}} />
                 <FaFacebookSquare style={{color : "#2997f9" , fontSize:"1.5rem"}} />
                 <FaTelegram  style={{color : "#2997f9" , fontSize:"1.5rem"}}/>
               </div>
            </div>
            <div className='w-[100%] hidden h-[72%] md:flex items-start text-[grey] justify-center'>
              <d8v className='w-[20%] h-full flex  justify-between items-start flex-col pb-8'>
              <div className=' w-full h-full  flex  items-start justify-start  flex-col gap-4 py-7'>
                  <p className='font-bold text-white'>Partnership</p>
                  <p className='hover:text-white cursor-pointer'>CoinDCX</p>
                  <p  className='hover:text-white cursor-pointer'>SunCrypto</p>
                  <p className='hover:text-white cursor-pointer'>Giottus</p>
                  <p className='hover:text-white cursor-pointer'>BitBNS</p>
                  <p className='hover:text-white cursor-pointer'>WhiteBIT</p>
                  <p className='hover:text-white cursor-pointer'>DigitalSurge</p>
                     
                </div>
                <div>
                    <img className='w-[100px] rounded-full' src={koinXISO} alt="" />
                </div>
              </d8v>
                <d8v className='w-[20%] flex items-start justify-start h-full flex-col gap-4 py-7'>
                  <p className='font-bold text-white'>Resources</p>
                  <p className='hover:text-white cursor-pointer'>Integrations</p>
                  <p className='hover:text-white cursor-pointer'>Product Guides</p>
                  <p className='hover:text-white cursor-pointer'>Product Releases</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Tax Guides</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Price Prediction</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Buying Guides</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Mining Guides</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Staking Guides</p>
                  <p className='hover:text-white cursor-pointer'>Affiliate Program</p>
                     
                </d8v>
                <d8v className='w-[20%] flex items-start justify-start h-full flex-col gap-4 py-7'>
                  <p className='font-bold text-white'>Company</p>
                  <p className='hover:text-white cursor-pointer'>About Us</p>
                  <p className='hover:text-white cursor-pointer'>Backed By</p>
                  <p className='hover:text-white cursor-pointer'>Security</p>
                  <p className='hover:text-white cursor-pointer'>Privacy Policy</p>
                  <p className='hover:text-white cursor-pointer'>Terms of use</p>
                  <p className='hover:text-white cursor-pointer'>KoinX Books -Terms of use</p>
                  <p className='hover:text-white cursor-pointer'>Refund Policy</p>
                  <p className='hover:text-white cursor-pointer'>Cookie Policy</p>
                  <p className='hover:text-white cursor-pointer'>Data Processing Addendum</p>
                  <p className='hover:text-white cursor-pointer'>Careers</p>
                  <p className='hover:text-white cursor-pointer'>Sitemap</p>
                  <p className='hover:text-white cursor-pointer'>Choose Country</p>
                     
                </d8v>
                <d8v className='w-[20%] flex items-start justify-start h-full flex-col gap-4 py-7'>
                  <p className='font-bold text-white'>Free Crypto Tax Calculators</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Tax Calculators - India</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Tax Calculators - UK</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Tax Calculators - Australia</p>
                  <p className='hover:text-white cursor-pointer'>Crypto Tax Calculators - USA</p>
                  
                     
                </d8v>
                <div className='w-[20%] flex items-start justify-start h-full flex-col gap-4 py-7'>
                  <p className='font-bold text-white'>Help and Support</p>
                  <p className='hover:text-white cursor-pointer'>Contact us</p>
                  <p className='hover:text-white cursor-pointer'>Support</p>
                 
                     
                </div>
            </div>
            <div className='w-[100%] text-sm h-[72%] md:hidden  text-[grey] '>
               <div className='flex items-start py-5 justify-between'>
                <div className='flex flex-col gap-1 w-[47%] '>
                  <p className='font-bold  text-white'>Crypto Taxes for</p>
                  <p>Individuals and investors</p>
                  <p>Tax Professionals and Accountants </p>
                  <p>Exchanges and Web3 projects</p>
                </div>
                <div className='flex flex-col gap-1 w-[47%] '>
                  <p className='font-bold text-white'>Free Tools</p>
                  <p>Crypto Prices Live</p>
                  <p>Crypto Tax Calculator </p>
                  <p>Crypto Tax Saving Spectacular</p>
                  <p>Crypto Profit Calculator</p>
                  <p>Crypto Converter</p>
                  <p>Crypto Staking ROI Calculator</p>
                </div>
               </div>

               <div className='flex w-full items-start py-5 justify-between'>
                <div className='flex flex-col gap-1 w-[47%]'>
                  <p className='font-bold text-white'>Resources Center</p>
                  <p>Crypto Tax Guides</p>
                  <p>Dumb Ways to Lose Money </p>
                  <p>Crypto Tax Savings Guide Blogs</p>
                  <p>Crypto Buying Guides</p>
                  <p>Crypto Staking Guides</p>
                  <p>Crypto Mining Guides</p>
                  <p>Crypto Prices Predictions</p>
                </div>
                <div className='flex flex-col gap-1 w-[47%] '>
                  <p className='font-bold text-white'>Help And Support </p>
                  <p>Product Guides</p>
                  <p>How to Guides</p>
                  <p>Templates</p>
                  <p>Contact us</p>
                 
                </div>
               </div>

               <div className='flex items-start py-5 justify-between'>
                <div className='flex flex-col gap-1 w-[47%] '>
                  <p className='font-bold text-white'>Company</p>
                  <p>About Us</p>
                  <p>Backed By </p>
                  <p>Media and Press</p>
                  <p>Careers <span className='bg-[#144b7c] text-[9px] text-white p-1 px-2 rounded'> We're hiring</span></p>
                  <p>Refund Policy</p>
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                </div>
                <div className='w-[47%]  '>
                <img className='w-[120px] rounded-full' src={koinXISO} alt="" />
                  
                 
                </div>
               </div>


            </div>
            <div className='flex w-[100%] text-[grey]  h-[10%] md:h-[14%] items-center justify-center border-t-1 border-white'>
              <p>© All rights reserved by Simplify Infotech Pvt. Ltd.</p>
            </div>
         </div>
     </footer>
  )
}

export default Footer