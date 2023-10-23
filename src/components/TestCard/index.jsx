
import React from 'react';
import styled from 'styled-components';

function TestCard() {


    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    console.log(currentYear)

    const backgroundImageStyle = {
        backgroundImage: 'url("@site/static/img/front-card.png")',
        backgroundSize: 'cover',
        width: '300px',
        height: '200px',
    };

    return (
        <div className=" w-full flex">


            <div className={`relative h-[245px] bg-[url('@site/static/img/front-card.png')] w-[300px] bg-contain bg-no-repeat lg:w-[400px]`}>
                <p className="absolute top-0-0 left-[5%] text-xl tracking-widest text-white lg:bottom-[26%] lg:text-3xl">
                    4242 4242 4242 4242
                </p>
                <p className="absolute bottom-[40%] left-[5%] text-[10px] uppercase text-white lg:bottom-[10%] lg:text-sm">
                    JANE DOE
                </p>
                <p className="absolute bottom-[40%] right-[8%] text-[10px]  text-white lg:bottom-[10%] lg:text-sm ">
                    00
                </p>
            </div>
            <div className='ml-10'>
                <div className=" relative h-[245px] w-[300px] bg-[url('@site/static/img/back-card.png')] bg-contain bg-no-repeat lg:w-[400px]">
                    <p className="absolute right-[15%] top-[25%] text-white lg:top-[39%]">
                        000
                    </p>
                </div>
            </div>
        </div >
    );
}

export default TestCard;


