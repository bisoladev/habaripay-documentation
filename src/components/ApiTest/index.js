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
    <div className='flex flex-col justify-center align-middle border-2 border-solid border-[#EBEBF2] dark:border-[#303337] rounded-lg md:px-5 px-2'>
      <div className='relative h-10 flex justify-between pt-3.5 text-[11px] md:text-[13px] leading-[10px]  border-b-2 border-0 border-solid border-[#EBEBF2] dark:border-b-[#303337]'>
        <div className='flex '>
          <p className='text-[#3F826D] font-semibold dark:text-[#4CB393]'>POST</p>
          <p className='text-[rgba(45,72,117,0.70)] dark:text-[#a8b7cc] pl-2 md:pl-4'>api.squad.co/payment/Initiate</p>
        </div>
        <div className=' group'>
          <div className='flex'>
            <p className='text-[#3F826D] text-[10px] md:text-xs dark:text-[#4CB393]'>cURL</p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='fill-[#008488] dark:fill-[#4CB393] ml-1 mt-[2px]'>
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </span>
          </div>
          <div className="invisible opacity-0 right-1 top-9 absolute z-20 duration-100 group-hover:opacity-100 group-hover:visible transition-all bg-white py-2 rounded">
            <p className='pt-3 hover:bg-gray-200 rounded'>Javascript</p>
            <p className='font-medium'>Dart</p>
          </div>
        </div>
      </div>
      <div className='pt-8'>
        <h4 className='text-[#0B3142] leading-3 dark:text-[#E2E8EF]'>
          Enter Payment details
        </h4>
        <p className='text-sm text-[#475569] leading-3 dark:text-[#94A3B8]'>Help us send transactions receipts to the customers</p>
      </div>
      <div className='py-6 md:grid md:grid-cols-2 md:gap-9 items-center'>
        <div className=''>
          <form className='text-base'>
            
          </form>
          <div className='flex flex-col'>
            <label className='pb-1 text-sm' htmlFor='amount'>Charge Amount</label>
            <input
              id='amount'
              type="number"
              placeholder='e.g 10000'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className='rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent'
            />
            <p className='text-xs pt-1 font-medium text-[#828282]'>minimum amount is 1000</p>
          </div>
          <div className='flex flex-col'>
            <label className='pb-1 text-sm' htmlFor='email'>Customer Email Address</label>
            <input
              id='email'
              type="email"
              placeholder='e.g example@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent'
            />
          </div>
          <button type='submit' onClick={initWidget} className='bg-[#e51e56] w-full hover:bg-[#d43d68] border-none text-white mt-7 mb-2 py-3 rounded-[4px] font-semibold cursor-pointer'>Send Request</button>
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

