import React, { useState, useEffect, useRef } from "react";
import "./Accordion.css";
import styled from 'styled-components'


export default function Accordion({ children, items }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="accordion">
        <button onClick={toggleState} className="accordion-visible">
          <span className="api-pill">POST</span>
          <span className="api-link">
            https://sandbox-api-d.squadco.com/transaction/initiate
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            suscipit quae maiores sunt ducimus est dolorem perspiciatis earum
            corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel
            quo eligendi ipsam.
          </p>
          <div>{children}</div>
          <div>
            {items?.map((item, id) => {
              return (
                <Container key={item?.key + id}>
                  <div className='text'>
                    <p>{item?.key}</p>
                  </div>
                  <div>
                    <p>{item?.dataType}</p>
                  </div>
                  <div>
                    <p>{item?.description}</p>
                  </div>
                </Container>
              )
            })}
          </div>
        </div> <div
          className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
          style={{ height: toggle ? `${heightEl}` : "0px" }}
          ref={refHeight}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            suscipit quae maiores sunt ducimus est dolorem perspiciatis earum
            corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel
            quo eligendi ipsam.
          </p>
          <div>{children}</div>
          <div>
            {items?.map((item, id) => {
              return (
                <Container key={item?.key + id}>
                  <div className='text'>
                    <p>{item?.key}</p>
                  </div>
                  <div>
                    <p>{item?.dataType}</p>
                  </div>
                  <div>
                    <p>{item?.description}</p>
                  </div>
                </Container>
              )
            })}
          </div>
        </div>
      </div></>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr
`
