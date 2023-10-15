import React from 'react'
import PaymentImg from '@site/static/img/TestPayments.png';
import TransferImg from '@site/static/img/TestTransfer.png';
import RecurringImg from '@site/static/img/TestRecurring.png';
import RefundImg from '@site/static/img/TestRefund.png';

const Hero = ({ imagePath, linkTo }) => {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-2 w-10/12 m-auto'>
            <a href="/Payments/Initiate-payment" className='border border-solid border-gray-200 rounded-md shadow-md hover:shadow-xl bg-white hover:no-underline'>
                <img src={PaymentImg} alt="Accept Payments" />
                <h3 className='text-center text-[#d83b68]'>Accept Payments</h3>
            </a>
            <a href="" className='border border-solid border-gray-200 rounded-md shadow-md hover:shadow-xl bg-white hover:no-underline'>
                <img src={TransferImg} alt="Transfers" />
                <h3 className='text-center text-[#d83b68]'>Transfers</h3>
            </a>
            <a href="" className='border border-solid border-gray-200 rounded-md shadow-md hover:shadow-xl bg-white hover:no-underline'>
                <img src={RecurringImg} alt="Recurring payments" />
                <h3 className='text-center text-[#d83b68]'>Recurring payments</h3>
            </a>
            <a href="" className='border border-solid border-gray-200 rounded-md shadow-md hover:shadow-xl bg-white hover:no-underline'>
                <img src={RefundImg} alt="Initiate Refunds" />
                <h3 className='text-center text-[#d83b68]'>Initiate Refunds</h3>
            </a>
        </div>
    )
}

export default Hero