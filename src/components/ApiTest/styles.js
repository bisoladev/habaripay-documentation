import styled from "styled-components"


export const Pre = styled.pre`
  text-align: left;
  font-size: 13px;
  margin-bottom: 20px;
  background: #F5F7F9 !important;
  margin: 4% auto;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-bottom: 10px;
  
  height: 94%;
  .code-wrap {
    white-space: wrap;
    height: 100%;
    padding: 8px 0;
    
  }
  @media screen and (max-width: 524px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    height: 200px;
  }
`

export const Line = styled.div`
  display: table-row;
`

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  user-select: none;
  padding-right: 0.4rem;
  opacity: 0.5;
`

export const LineContent = styled.span`
  display: table-cell;
`

