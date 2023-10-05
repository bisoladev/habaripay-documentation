import React, { useState, useEffect, useRef } from "react";
import "./Accordion.css";
import styled from 'styled-components'
import Highlight, { defaultProps } from "prism-react-renderer"
import oceanicNext from "prism-react-renderer/themes/oceanicNext"
import { Pre, Line, LineContent, LineNo } from "./styles"



export default function InnerAccordion({ response }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    // console.log(refHeight);
    setHeightEl(`${refHeight?.current?.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div>
        <Container>
          <div className="accordion" onClick={toggleState}>
            <button className="accordion-visible">
              {/* <span className="api-pill">POST</span> */}
              <span>{response?.status}</span>
              <span className="api-link">
                {response?.responseMsg}
              </span>
              <svg
                className={toggle ? "active" : ""}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </button>


            <div
              className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
              style={{ height: toggle ? `${heightEl}` : "0px" }}
              ref={refHeight}
            >
              <Highlight
                {...defaultProps}
                code={response?.code}
                theme={oceanicNext}
                language={"jsx"}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  // <div>
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
                  // </div>
                )}
              </Highlight>
            </div>
          </div>
        </Container>
      </div>

    </>
  );
}

const Container = styled.div`
  
`
