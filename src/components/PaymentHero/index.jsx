import React from 'react'
import { twMerge } from 'tailwind-merge';

const WebsiteImg = '/img/website.svg';
const MobileImg = '/img/mobile.svg';
const ECommerceImg = '/img/e-commerce.svg';

const Hero = () => {
    return (
        <div className='grid grid-cols-3 gap-6 mx-auto my-14'>
            <div
               className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] dark:text-[#E2E8EF] text-[#0B3142] dark:bg-[#2C2F36] bg-[#F6FAFB]')}>
                <img src={WebsiteImg} alt="Accept Payments" />
                <h3 className='text-sm pt-5 font-semibold'>On your website</h3>
            </div>
            <div className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] dark:text-[#E2E8EF] text-[#0B3142] dark:bg-[#2C2F36] bg-[#F6FAFB]')}>
                <img src={MobileImg} alt="Transfers" />
                <h3 className='text-sm pt-5 font-semibold'>Mobile Apps</h3>
            </div>
            <div className={twMerge('rounded-lg hover:no-underline text-center p-6',
                                  'grid place-items-center hover:text-[#0B3142] dark:text-[#E2E8EF] text-[#0B3142] dark:bg-[#2C2F36] bg-[#F6FAFB]')}>
                <img src={ECommerceImg} alt="Recurring payments" />
                <h3 className='text-sm pt-5 font-semibold'>On your e-Commerce Store</h3>
            </div>
        </div>
    )
}

export default Hero