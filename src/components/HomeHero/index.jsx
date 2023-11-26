import React from 'react'
import { twMerge } from 'tailwind-merge';

const PaymentImg = '/img/payments.svg';
const TransferImg = '/img/transfer.svg';
const RecurringImg = '/img/recurring.svg';
const RefundImg = '/img/refunds.svg';

const Hero = () => {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-2 m-auto'>
            <a href="/Payments/Initiate-payment" 
               className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={PaymentImg} alt="Accept Payments" className='h-48 w-auto'/>
                <h3 className='text-sm font-semibold pt-5'>Accept Payments</h3>
                <p className='text-[#475569] px-5 text-xs'>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
            <a href="" className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={TransferImg} alt="Transfers" className='h-48 w-auto' />
                <h3 className='text-sm font-semibold pt-5'>Transfers</h3>
                <p className='text-[#475569] px-5 text-xs'>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
            <a href="" className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={RecurringImg} alt="Recurring payments" className='h-48 w-auto'/>
                <h3 className='text-sm font-semibold pt-5'>Recurring payments</h3>
                <p className='text-[#475569] px-5 text-xs'>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
            <a href="" className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={RefundImg} alt="Initiate Refunds" className='h-48 w-auto'/>
                <h3 className='text-sm font-semibold pt-5'>Initiate Refunds</h3>
                <p className='text-[#475569] px-5 text-xs'>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
        </div>
    )
}

export default Hero