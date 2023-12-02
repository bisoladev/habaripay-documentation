import React from 'react'

const WooCommerce = '/img/woo-commerce.png';
const OrderImg = '/img/place-order.png';
const ModalImg = '/img/wooModal.png';

const WooImgComponent = () => {
    return (
        <div className='grid place-items-center w-full text-center text-gray-500 dark:text-gray-400 text-sm'>
            <div>
               <img src={WooCommerce} alt="Ussd Modal" className='' />
                <p>1/3 - Squad Settings</p> 
            </div>
            <div>
               <img src={OrderImg} alt="Ussd Modal" className='' />
                <p>2/3 - Sample Order Page</p> 
            </div>
            <div>
               <img src={ModalImg} alt="Ussd Modal" className='' />
                <p>3/3 - Squad Payment Modal</p> 
            </div>
            
        </div>
    )
}

export default WooImgComponent;