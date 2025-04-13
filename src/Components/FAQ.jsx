import React from 'react'
import { data } from '../data'

const FAQ = () => {
  return (
    <section className=' w-full px-20  bg-[#eff2f5]'>
      <div className='w-[66%] p-10 bg-white  rounded-2xl'>
      <h1 className='text-[25px]  font-bold'>Frequently Asked Questions</h1>
        {
            data.map((ele , i) =>{
                if(i == 3){
                    return <div className='border-b-2 border-b-[#e3e3e3]  pb-7' key={`${ele}_${i}`}>
                    <h1 className='text-xl py-5 font-bold'>{ele.Q}</h1>
                    
                         <p>{ele.A.sub}</p>
                         
                        <ul>
                        {
                            ele.A.points.map((element , i) =>{
                                return <li className=' py-2'>&#x2022; <strong className='text-[black]'>{element.heading}</strong>{element.content}</li>
                            })
                     }
                        </ul>
                  </div> 
                }else if(i == 10){
                    return <div className='border-b-2 border-b-[#e3e3e3]  pb-7' key={`${ele}_${i}`}>
                    <h1 className='text-xl py-5 font-bold'>{ele.Q}</h1>
                    <p>{ele.A}</p>
                    <pre>{ele.B}</pre>
                  </div> 
                }
                
                else{
                    return <div className='border-b-2 border-b-[#e3e3e3]  pb-7' key={`${ele}_${i}`}>
                    <h1 className='text-xl py-5 font-bold'>{ele.Q}</h1>
                    <p>{ele.A}</p>
                  </div> 
                }
            })
        }

        <p>Still have doubts? <a className='text-[#0052fe] underline font-bold underline-offset-3' href="#">Consult with a crypto taxation expert</a></p>
         
         
      </div>
    </section>
  )
}

export default FAQ