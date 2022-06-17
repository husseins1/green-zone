import { Button, Container, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Menu() {
  return (
    <>
    <Container textAlign={"center"} maxWidth={"xl"}>

        <Text  fontSize="lg" >
            Menu
        </Text>

        <Text  fontSize="4xl" fontWeight={"600"}>
            Our Most Popular Foods
        </Text>

        <Grid templateColumns={{base:"repeat(auto-fit,minmax(260px,268px))"}} >

            <GridItem  px={"4"} py="6" border={"2px"} borderColor="brand.light" >
                <Image style={{
                    borderRadius:"50%",
                    
                }} alt="fs" src="/Drinks.jfif" width={"190px"} height={"190px"} />

                <Text marginY="8" fontSize="lg" fontWeight={"400"}>
                    Drinks
                
                </Text>
                      <Text marginY="8"  fontSize="lg" fontWeight={"400"}>
                    6000 IQD
                
                </Text>
                <Button  variant={"outline"}
                          borderColor={"brand.light"} 
                            color={"brand.light"}
                            fontWeight={"400"}
                borderRadius="none" colorScheme="teal">
                    View Now
                </Button>  
            </GridItem >
            </Grid>



    </Container>
    </>
  )
}
