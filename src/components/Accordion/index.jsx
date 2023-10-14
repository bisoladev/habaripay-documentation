import React, { useState } from "react";
import styled from "styled-components";

const Accordion = (props) => {
  const [active, setActive] = useState(false);

  const classState = active ? "open" : "";
  const rotate = active ? "rotate-90" : "";
  const methodColor = props?.method === "POST" ? "bg-[#217837]" : props?.method === "GET" ? "bg-[#2854D2]" : "bg-[green]"

  const onClick = () => {
    setActive(state => !state);
  }




  return (
    <Container className=' dark:border-[#303337]'>
      <Wrapper className={`${classState}`}>
        <div className="header" onClick={onClick}>
          <div className={`${methodColor} w-16 h-6 rounded-3xl text-center  mt-2 mr-2 text-white`}>{props.method}</div>

          <span className="justify-self-center font-medium text-sm">
            https://sandbox-api-d.squadco.com/<span className="font-normal">{props.endpoint}</span>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className={`${rotate} transition-all justify-self-end dark:fill-white`}>
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
        <div className="accordion-details">
          <div className="content">
            {props?.header ? <h3>{props?.header}</h3> : null}
            {props?.summary ? <p className="text-base">{props?.summary}</p> : null}

            {props?.parameters ? <div><h4 className="pb-4">Parameters</h4>
              <div>
                {props?.items?.map((item, id) => {
                  return (
                    <div>
                      <h5 className="text-sm">{item.title}</h5>
                      <div className="items-wrap">
                        {item?.children?.map((param) => {
                          return (
                            <div key={param?.key + id} className="grid grid-cols-[1fr_1fr_2fr] text-sm border-bottom pt-3.5">
                              <div className='text'>
                                <p className="tracking-widest">{param?.key}</p>
                              </div>
                              <div>
                                <p>{param?.dataType}</p>
                              </div>
                              <div>
                                <p>{param?.description}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div> : null}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Accordion;

const Container = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 10px 35px 15px;

  .items-wrap {
    :last-child {
    border-bottom: none;
  }
  }

  .border-bottom {
    border-bottom: 1px solid rgba(174, 174, 174, 0.2);

  }
`;




const Wrapper = styled.div`
  
  .header {
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      padding-block: 1.5rem;
    }
  }
`;

