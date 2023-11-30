import React, { useState } from "react";
import styled from "styled-components";
import CodeBlock from '@theme/CodeBlock';
import { twMerge } from "tailwind-merge";


export const Toggle = ({ data }) => {
  const [open, setOpen] = useState(false);

  const classState = open ? "open" : "";
  const rotate = open ? "rotate-90" : "";

  const onClick = () => {
    setOpen(state => !state);
  }

  return (
    <Wrapper className={`${classState} dark:border-b-[#303337] cursor-pointer`}>
      <div className="flex justify-between items-center h-12" onClick={onClick}>
        <p className="mb-0 pb-0">{data?.language}</p>

        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className={`${rotate} transition-all justify-self-end dark:fill-white`} >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </div>
      <div className="accordion-details">
        <div className="content">
          <h4>{data?.headerOne}</h4>
          <CodeBlock className="language-jsx my-5">{data?.codeOne}</CodeBlock>
          <h4 className="pt-6">{data?.headerTwo}</h4>
          <CodeBlock className="language-jsx my-5 pb-5">{data?.codeTwo}</CodeBlock>
        </div>
      </div>
    </Wrapper>
  );
}

export default function AccordionLang({ items }) {
  return (
    <Container className=' dark:border-[#303337]'>
      <div className="">
        {items?.map((item) => {
          return (
            <Toggle key={item.key} data={item} />
          )
        })}
      </div>

    </Container>
  );
};
const Container = styled.div`
  border: 2px solid #EBEBF2;
  border-radius: 8px;
  padding-inline: 35px;
  padding-block: 8px;
  margin-top: 1.5rem;

  :last-child {
    border-bottom: none;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  @media only screen and (max-width: 600px) {
    padding-inline: 15px;
  }
`;


const Wrapper = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #f7f7f7;
  /* padding-bottom: 10px; */
  

  .accordion-details {
    display: grid;
    grid-template-rows: 0fr;
    transition: all 0.4s ease-out;

    .content {
      overflow: hidden;
    }
  }

  &.open {
    .accordion-details {
      grid-template-rows: 1fr;
    }
  }

`;

