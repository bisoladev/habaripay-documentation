import React from 'react'

const TransferImg = '/img/transferModal.png';

const TransferModalImg = () => {
    return (
        <div className='grid place-items-center w-full bg-[#F4F6F9] dark:bg-[#22282F] rounded-lg'>
            <img src={TransferImg} alt="Ussd Modal" className='w-[60%]' />
        </div>
    )
}

export default TransferModalImg