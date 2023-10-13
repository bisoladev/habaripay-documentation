import React from 'react'
import styled from 'styled-components'

const ApiTest = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  function initWidget() {
    console.log('fired here');

    const params = {
      key: "pk_7dcde329cc77537c2783fc5b3172027d879d0566",
      amount: 8000,
      email: "bisola@gmail.com",
      // transaction_ref: "",
      currency_code: 'NGN',
      // merchant: data.merchant_info,
      // ...(data.initiate_type ? { initiate_type: data.initiate_type } : { inline: true }),
    };
    // params.redirect_link = metaValues?.redirectLink ?? params?.callback_url;
    const squadInstance = new window.squad({
      onClose: () => {
        console.log('Widget closed');
        setIsLoading(false);
      },
      onLoad: () => {
        console.log('Widget loaded successfully');
        setIsLoading(false);
      },
      onSuccess: () => {
        setPaymentSuccess(true);
      },
      ...params,
    });

    squadInstance.setup();
    squadInstance.open();
  }

  return (
    <Container>
      <Header>
        <CircleWrap>
          <div className='circle red' />
          <div className='circle yellow' />
          <div className='circle green' />
        </CircleWrap>
        <div className='api-header'>
          <p className='post-text'>POST</p>
          <p className='api-link'>api.squad.co/payment/Initiate</p>
        </div>
        <div>
          <p className='lang'>cURL</p>
        </div>
      </Header>
      <Body>
        <div>
          <Form>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            <h4 className='payment-text'>
              Enter Payment details
            </h4>
            <p className='sub-text'>Help us send transactions receipts to the customers</p>
          </Form>
          <AmountWrap>
            <label>Charge Amount</label>
            <input type="number" placeholder='e.g 10000' />
            <p className='min-text'>minimum amount is 1000</p>
          </AmountWrap>
          <EmailWrap className='input-wrap'>
            <label>Customer Email Address</label>
            <input type="email" placeholder='e.g example@email.com' />
          </EmailWrap>
          <Button type='submit' onClick={initWidget}>Send Request</Button>
        </div>
        <div>
        </div>
      </Body>
    </Container>
  )
}

export default ApiTest

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  height: 40px;
  width: 98%;
  border: 2px solid #ebebf2;
  border-radius: 10px 10px 0 0; 
  display: flex;
  justify-content: space-between;
  line-height: 10px;
  padding-top: 12px;
  padding-inline: 16px;
  font-size: 13px;
  /* align-items: center; */


  .api-header {
    display: flex;
  }

  .post-text {
    color: #008488;
  }

  .api-link {
    padding-left: 1.5rem;
    color: #868686;
  }

  .lang {
    color: #008488;
    font-size: 12px;
  }
`

const CircleWrap = styled.div`
  display: flex;
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.4;
  }

  .red {
    background-color: #e73a2e;
    margin-right: 0.3rem;
  }

  .yellow {
    background-color: #fcc938;
    margin-right: 0.3rem;
  }
  .green {
    background-color: #12b36c;
  }
`;

const Body = styled.div`
  width: 98%;
  border: 2px solid #ebebf2;
  border-top: none;
  border-radius: 0px 0px 10px 10px; 
  padding-inline: 16px;
  padding-block: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Form = styled.form`
font-size: 16px;
  svg {
    fill: #F2C278;
    margin-bottom: 1rem;
  }

  .sub-text {
    font-size: 14px;
    width: 80%;
    line-height: 20px;
  } 

  .min-text {
    font-size: 12px;
  }
`;

const AmountWrap = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 170px;
    padding: 0.5rem 0.8rem;
    border-radius: 3px;
    border: 1px solid #ededf3;
  }

  label {
    padding-bottom: 0.2rem;
  }

  .min-text {
    font-size: 12px;
    font-weight: 300;
    padding-top: 0.3rem;
    color: #979797;
  }
`;

const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 170px;
    padding: 0.5rem 0.8rem;
    border-radius: 3px;
    border: 1px solid #ededf3;
  }

  label {
    padding-bottom: 0.2rem;
  }
`;

const Button = styled.button`
  background-color: #e51e56;
  border: none;
  color: #ffffff;
  margin-top: 1rem;
  padding: 0.6rem 2rem;
  border-radius: 4px;

`;
