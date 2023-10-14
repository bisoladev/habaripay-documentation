import React, { useState } from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer"
import oceanicNext from "prism-react-renderer/themes/oceanicNext"
import { Pre, Line, LineContent, LineNo } from "./styles"


export const Toggle = ({ data }) => {
  const [active, setActive] = useState(false);

  const classState = active ? "open" : "";
  const rotate = active ? "rotate-90" : "";
  const pillColor = data?.pill;

  const onClick = () => {
    setActive(state => !state);
  }

  return (
    <Wrapper className={`${classState} dark:border-b-[#303337]`}>
      <div className="header" onClick={onClick}>
        <div className="flex">
          <div className={`w-2 h-2 rounded-full ${pillColor} mt-2 mr-2`} />
          <span>{data?.status}</span>
        </div>

        <span className="justify-self-center font-normal">
          {data?.responseMsg}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className={`${rotate} transition-all justify-self-end`}>
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </div>
      <div className="accordion-details">
        <div className="content">
          <Highlight
            {...defaultProps}
            code={data?.code}
            theme={oceanicNext}
            language={"jsx"}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                <div className="code-wrap">
                  {tokens?.map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                      <LineNo>{i + 1}</LineNo>
                      <LineContent>
                        {line?.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </LineContent>
                    </Line>
                  ))}
                </div>
              </Pre>
            )}
          </Highlight>
        </div>
      </div>
    </Wrapper>
  );
}

export default function AccordionCode({ items }) {
  return (
    <Container className=' dark:border-[#303337] shadow-[3px_3px_7px_rgba(0,0,0,0.04)]'>
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
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 10px 20px 15px;

  :last-child {
    border-bottom: none;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`;


const Wrapper = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #f7f7f7;
  padding-bottom: 10px;
  
 

  .header {
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 2fr 4fr 1fr;
    column-gap: 1rem;
  }

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

