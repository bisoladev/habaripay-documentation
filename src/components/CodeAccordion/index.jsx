import React from "react";
import InnerAccordion from "../InnerAccordion";


export default function CodeAccordion({ responses }) {
  return (
    <>
      <div>
        {responses?.map((response, id) => {
          return (
            <InnerAccordion response={response} key={id} />
          )
        })}
      </div>

    </>
  );
}
