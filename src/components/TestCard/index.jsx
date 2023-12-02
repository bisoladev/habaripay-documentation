
import React from 'react';
import styled from 'styled-components';

function TestCard() {


    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    console.log(currentYear)

    const backgroundImageStyle = {
        backgroundImage: 'url("@site/static/img/frontCard.svg")',
        backgroundSize: 'cover',
        width: '300px',
        height: '200px',
    };

    return (
        <div className=" w-full flex">


            <div className={`relative h-[245px] bg-[url('@site/static/img/frontCard.svg')] w-[300px] bg-contain bg-no-repeat lg:w-[400px]`}>
                <p className="absolute top-0-0 left-[5%] text-xl tracking-widest text-white lg:bottom-[32%] lg:text-[28px]">
                    4242 4242 4242 4242
                </p>
            </div>
            <div className='ml-10'>
                <div className=" relative h-full w-[400px] bg-[url('@site/static/img/back-card.svg')] bg-contain bg-no-repeat lg:w-[400px]">
                   
                </div>
            </div>
        </div >
    );
}

export default TestCard;


