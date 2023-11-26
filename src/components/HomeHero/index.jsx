import React from 'react'
import { twMerge } from 'tailwind-merge';
// import {ReactComponent as PaymentImg} from '@site/static/img/payments.svg';

const PaymentImg = '/img/payments.svg';
const TransferImg = '/img/transfer.svg';
const RecurringImg = '/img/recurring.svg';
const RefundImg = '/img/refunds.svg';
// const PaymentImg = require('/img/payments.svg').default;

const Hero = ({ imagePath, linkTo }) => {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-2 m-auto'>
            <a href="/Payments/Initiate-payment" 
               className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={PaymentImg} alt="Accept Payments" />
                <h3 className=''>Accept Payments</h3>
                <p className='text-[#475569] px-5 '>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
            <a href="" className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={TransferImg} alt="Transfers" />
                <h3 className=''>Transfers</h3>
                <p className='text-[#475569] px-5 '>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
            <a href="" className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={RecurringImg} alt="Recurring payments" />
                <h3 className='pt-4 mb-0'>Recurring payments</h3>
                <p className='text-[#475569] px-5 '>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
            <a href="" className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] text-[#0B3142] bg-[#F6FAFB]')}>
                <img src={RefundImg} alt="Initiate Refunds" />
                <h3 className=''>Initiate Refunds</h3>
                <p className='text-[#475569] px-5 '>
                    This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal
                </p>
            </a>
        </div>
    )
}

export default Hero