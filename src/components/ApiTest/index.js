import React, { useState } from 'react'
import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"
import { Pre, Line, LineContent, LineNo } from "./styles"

const ApiTest = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [amount, setAmount] = useState("")
  const [email, setEmail] = useState("")

  let code =
    `Curl https:/api.squad.co/payment/Initiate
-H "Authorization: Bearer sk_test_DEFAULT"
-H "Content-Type: application/json" 
${`-d{“amount”:${amount ? amount + "," : "_ ,"} “email”: ${email ? email + " " : "_ "
    }}`}
-X POST `;

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
    <div className='flex flex-col justify-center align-middle'>
      <div className='h-10 w-[98%] border-2 border-solid border-[#ebebf2] rounded-t-lg flex justify-between pt-3 px-2 md:px-5 text-[11px] md:text-[13px] leading-[10px]'>
        <div className='flex'>
          <div className='w-[10px] h-[10px] bg-[#e73a2e] opacity-40 rounded-full max-[480px]:w-1 max-[480px]:h-1' />
          <div className='w-[10px] h-[10px] bg-[#fcc938] opacity-40 rounded-full mx-1 max-[480px]:w-1 max-[480px]:h-1' />
          <div className='w-[10px] h-[10px] bg-[#12b36c] opacity-40 rounded-full max-[480px]:w-1 max-[480px]:h-1' />
        </div>
        <div className='flex'>
          <p className='text-[#008488]'>POST</p>
          <p className='text-gray-500 pl-2 md:pl-4'>api.squad.co/payment/Initiate</p>
        </div>
        <div>
          <p className='text-[#008488] text-[10px] md:text-xs'>cURL</p>
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
          <button type='submit' onClick={initWidget} className='bg-[#e51e56] w-full md:w-7/12 hover:bg-[#d43d68] border-none text-white mt-7 mb-2 py-[8px] rounded-[4px] font-semibold cursor-pointer'>Send Request</button>
        </div>
        <div className=''>
          <Highlight
            {...defaultProps}
            code={code}
            theme={github}
            language={"jsx"}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                <div className="code-wrap">
                  {tokens?.map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                      <LineNo>{i + 1}</LineNo>
                      <LineContent>
                        {line?.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </LineContent>
                    </Line>
                  ))}
                </div>
              </Pre>
            )}
          </Highlight>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ApiTest

