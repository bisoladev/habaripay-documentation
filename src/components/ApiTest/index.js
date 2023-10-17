import React, { useState } from 'react'
import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"
import { Pre, Line, LineContent, LineNo } from "./styles"
import CodeBlock from '@theme/CodeBlock';

const ApiTest = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [amount, setAmount] = useState("")
  const [email, setEmail] = useState("")

  let code =
    `Curl https://api.squad.co/payment/Initiate
-H "Authorization: Bearer sk_test_DEFAULT"
-H "Content-Type: application/json" 
${`-d{"amount":${amount ? amount + "," : "_ ,"} "email": "${email ? email + " " : "_ "
    }"}`}
-X POST 






`;


  function initWidget() {
    console.log('fired here');

    const params = {
      amount: Number(amount),
      email: email,
      currency_code: "NGN",
      key: "test_pk_sample-public-key-1",
    };

    const squadInstance = new window.squad({
      onClose: () => {
        console.log('Widget closed');
        setIsLoading(false);
      },
      onLoad: () => {
        console.log('Widget loaded successfully');
        setIsLoading(false);
      },
      onSuccess: () => {
        setPaymentSuccess(true);
      },
      ...params,
    });

    squadInstance.setup();
    squadInstance.open();
  }

  return (
    <div className='flex flex-col justify-center align-middle '>
      <div className='relative h-10 w-[98%] border-2 border-solid border-[#ebebf2] rounded-t-lg flex justify-between pt-3 px-2 md:px-5 text-[11px] md:text-[13px] leading-[10px]'>
        <div className='flex'>
          <div className='w-[10px] h-[10px] bg-[#e73a2e] opacity-40 rounded-full max-[480px]:w-1 max-[480px]:h-1' />
          <div className='w-[10px] h-[10px] bg-[#fcc938] opacity-40 rounded-full mx-1 max-[480px]:w-1 max-[480px]:h-1' />
          <div className='w-[10px] h-[10px] bg-[#12b36c] opacity-40 rounded-full max-[480px]:w-1 max-[480px]:h-1' />
        </div>
        <div className='flex '>
          <p className='text-[#008488]'>POST</p>
          <p className='text-gray-500 pl-2 md:pl-4'>api.squad.co/payment/Initiate</p>
        </div>
        <div className=' group'>
          <div className='flex'>
            <p className='text-[#008488] text-[10px] md:text-xs'>cURL</p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='fill-[#008488] ml-1 mt-[2px]'>
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </span>
          </div>
          <div className="invisible opacity-0 right-1 top-9 absolute z-20 duration-100 group-hover:opacity-100 group-hover:visible transition-all bg-white py-2 border-2 border-solid border-gray-200 rounded">
            <p className='pt-3 hover:bg-gray-200 rounded'>Javascript</p>
            <p className='font-medium'>Dart</p>
          </div>
        </div>
      </div>
      <div className='w-[98%] border-2 border-solid border-[#ebebf2] border-t-0 rounded-b-lg px-5 py-6 md:grid  md:grid-cols-2'>
        <div>
          <form className='text-base'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='fill-[#F2C278] mb-4'>
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            <h4 className='payment-text'>
              Enter Payment details
            </h4>
            <p className='text-sm md:w-9/12 leading-5'>Help us send transactions receipts to the customers</p>
          </form>
          <div className='flex flex-col'>
            <label className='pb-1 text-sm' htmlFor='amount'>Charge Amount</label>
            <input
              id='amount'
              type="number"
              placeholder='e.g 10000'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className='rounded-[3px] px-3 py-2 border-[#ededf3] border-solid border w-full md:w-7/12'
            />
            <p className='text-xs pt-1 font-medium text-gray-400'>minimum amount is 1000</p>
          </div>
          <div className='flex flex-col'>
            <label className='pb-1 text-sm' htmlFor='email'>Customer Email Address</label>
            <input
              id='email'
              type="email"
              placeholder='e.g example@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-[3px] px-3 py-2 border-[#ededf3] border-solid border w-full md:w-7/12'
            />
          </div>
          <button type='submit' onClick={initWidget} className='bg-[#e51e56] w-full md:w-7/12 hover:bg-[#d43d68] border-none text-white mt-7 mb-2 py-[10px] rounded-[4px] font-semibold cursor-pointer'>Send Request</button>
        </div>
        <div className=''>
          <CodeBlock className="language-jsx">{code}</CodeBlock>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ApiTest

