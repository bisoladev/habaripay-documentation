import styled from "styled-components"


export const Pre = styled.pre`
  text-align: left;
  padding-left: 20px;
  font-size: 13px;margin-bottom: 20px;
  width: 96%;
  overflow: scroll !important;
  background: #F5F7F9 !important;
  margin: 10px auto;
  border-radius: 8px;
  padding-bottom: 10px;
  
  /* height: 341px; */
  .code-wrap {
    overflow: auto;
    height: 100%;
    padding: 8px 0;
    
  }
  @media screen and (max-width: 524px) {
    max-width: 521px;
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
  padding-right: 1rem;
  user-select: none;
  opacity: 0.5;
`

export const LineContent = styled.span`
  display: table-cell;
`

