import React from 'react'
import styled from 'styled-components'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg, bg2 }) {
    return (
        <Wrap bgImage={backgroundImg} bg2={bg2}>
            <Fade bottom cascade delay={400} distance="3rem">
                <ItemText>
                    <h1>{title}</h1>
                    <Fade bottom delay={800} distance="3rem"><p>{description}</p></Fade>
                </ItemText>
            </Fade>
            <Buttons>
                
                <Fade bottom delay={800} distance="3rem" >
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                </Fade>
                <DownArrow>
                    <ExpandMoreRoundedIcon className='icon' />
                </DownArrow>

            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.bgImage})`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        background-image: ${props => `url(${props.bg2})`};
    }
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    p{
            font-weight: 400;
            opacity: 0.6;
            border-bottom: 1.4px solid black;
            width: fit-content;
            cursor: pointer;
    }
    p:hover{
        border-bottom: 2px solid black;
        transition: all 1s;
    }
    h1 {
        font-size: 2.7rem;
        font-weight: 550;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 7vh;
    @media (max-width: 768px){
        flex-direction: column;
        gap: 1.2rem;
        margin-bottom: 5vh;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 264px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 550;
    backdrop-filter: blur(7px);
    cursor: pointer;

    @media (max-width: 768px){
        width: 300px;
    }
`
const RightButton = styled(LeftButton)`
    background-color: rgba(255, 255,255,0.4);
    color: black;
    font-weight: 500;
`

const DownArrow = styled.div`
    
    .icon {
        transform: scale(1.4);
        margin-bottom: 1.6rem;
        animation: animateDown infinite 1.5s;
        cursor: pointer;
    }
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px){
        margin-bottom: 4rem;
    }
`
