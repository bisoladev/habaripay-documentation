import React, { useState } from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer"
import oceanicNext from "prism-react-renderer/themes/oceanicNext"
import { Pre, Line, LineContent, LineNo } from "./styles"


export const Toggle = ({ data }) => {
  const [active, setActive] = useState(false);

  const classState = active ? "open" : "";

  const onClick = () => {
    setActive(state => !state);
  }

  return (
    <Wrapper className={classState}>
      <div className="header" onClick={onClick}>
        <span>{data?.status}</span>
        <span className="api-link">
          {data?.responseMsg}
        </span>
        <svg
          // className={toggle ? "active" : ""}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
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

export default function Accordion({ items }) {
  return (
    <div className='bg-yellow-600 dark:bg-red-600'>
      <div className='list'>
        {items?.map((item) => {
          return (
            <Toggle key={item.key} data={item} />
          )
        })}
      </div>

    </div>
  );
};


const Wrapper = styled.div`
  margin-bottom: 20px;

  .header {
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
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

