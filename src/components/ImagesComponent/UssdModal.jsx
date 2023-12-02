import React from 'react'

const UssdImg = '/img/ussdModal.png';

const UssdModalImg = () => {
    return (
        <div className='grid place-items-center w-full bg-[#F4F6F9] dark:bg-[#22282F] rounded-lg'>
            <img src={UssdImg} alt="Ussd Modal" className='w-[60%]' />
        </div>
    )
}

export default UssdModalImg