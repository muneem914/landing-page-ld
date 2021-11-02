import React from 'react'
import styled from 'styled-components'
import search from '../img/search.png'

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
`
const Image = styled.img`
    width: 20px;
`
const Text = styled.span`
margin-top: 10px;
text-align: center;
`
export const MiniCard = () => {
    return (
        <Container>
            <Image src={search}/>
            <Text>Lorem ipsum dolor sit amet consectetour</Text>
        </Container>
    )
}
