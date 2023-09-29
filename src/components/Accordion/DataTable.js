import React from 'react'
// import { paymentLinkAPI } from '../../data'
import styled from 'styled-components'




const DataTable = ({ items }) => {
    return (
        <>
            {items?.map((item, id) => {
                return (
                    <Container key={item.key + id}>
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
        </>
    )
}

export default DataTable

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr
`