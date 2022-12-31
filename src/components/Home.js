import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model Y"
                description="Schedule a Demo Drive"
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
                bg2 = "https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/0x0/3304be3b-dd0a-4128-9c26-eb61c0b98d61"
                leftBtnText="Buy Now"
                rightBtnText="Custom Order"
            />
            <Section
                title="Model 3"
                description="Schedule a Demo Drive"
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
                bg2 = "https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD"
                leftBtnText="Buy Now"
                rightBtnText="Custom Order"
            />
            <Section
                title="Model S"
                description="Schedule a Demo Drive"
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
                bg2 ="https://tesla-cdn.thron.com/delivery/public/image/tesla/8138ba80-06f8-4bda-8bcd-a076a44b00f7/bvlatuR/std/1928x4096/Homepage-Model-S-Mobile-LHD"
                leftBtnText="Buy Now"
                rightBtnText="Custom Order"
            />
            <Section
                title="Model X"
                description="Schedule a Demo Drive"
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
                bg2 = "https://tesla-cdn.thron.com/delivery/public/image/tesla/7d0fc315-dd4c-42f3-b9e1-a98f488f1e9a/bvlatuR/std/1927x4096/Homepage-Model-X-Mobile-LHD"
                leftBtnText="Buy Now"
                rightBtnText="Custom Order"
            />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
                bg2 = "https://tesla-cdn.thron.com/delivery/public/image/tesla/066f19b7-d68e-45e2-8575-ad0a6f8375a8/bvlatuR/std/600x1576/_25-HP-SolarPanels-M"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto"
                bg2= "https://tesla-cdn.thron.com/delivery/public/image/tesla/e5c48745-ec05-4488-9585-5b3daf8075ac/bvlatuR/std/750x1624/Homepage-SolarRoof-Mobile-Global?quality=auto-medium&format=auto"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046"
                bg2 = "https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/0x0/69095129-86c5-4f6c-a77a-740ceac04e82"
                leftBtnText="Order Now"
            />
        </Container>
    )
}


export default Home

const Container = styled.div`
    height: 100vh;
`