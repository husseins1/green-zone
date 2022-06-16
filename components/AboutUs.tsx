import { Box, Grid, Text,GridItem } from "@chakra-ui/react";
import {
    List,
    ListItem,
    
} from '@chakra-ui/react'
import Image from "next/image"
import CheckIcon from "./CheckIcon";
const services = [
    {
    title:"Free Shipping",
    subtitle:"Orders over 140$",
    url:"/truck.svg",
},
    {
        title:"Quick Payment",
        subtitle:"100% secure payment",
    url:"/wallet.svg",
},
    {
        title:"Special Promo",
        subtitle:"Get special promo",
    url:"/percentage.svg",
},
    {
        title:"24/7 Support",
        subtitle:"Ready support",
    url:"/headphones.svg",
},


]

export default function AboutUs() {
  return (
    <Box  marginY="20">
    <style jsx>
        {`
        .hr{
            
            width:80%;
            margin:1rem auto;
            
        }
        
        `}
    </style>
    <hr className="hr" />
    <Grid templateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)"}} rowGap="12" margin="8">
        {
            services.map((ele,i)=>(

                <GridItem key={i} textAlign={"center"} alignItems="center" display={{xl:"flex"}} justifyContent="center" >

                    <Box marginBottom={{ base: "4", xl: "0" }} marginLeft={{ base: "auto", xl: "unset" }} marginRight={{base:"auto",xl:"4"}} display={"flex"} justifyContent="center" alignItems={"center"} width="70px" height="70px" borderRadius={"xl"} bgColor={"myColor"}>
                    <img src={ele.url} alt={ele.title}/>
                </Box>
                <Box>

                <Text fontSize="lg" >
                    {ele.title}
                </Text>
                <Text color={"gray.500"} fontSize="md" >
                    {ele.subtitle}
                </Text>
                </Box>

                </GridItem>
            ))
        }
    
    </Grid>
    <hr className="hr" />

    <Box margin="8" display={{md:"flex"}} justifyContent="center" alignItems="center">

    <Box width={{base:"80%",md:"max-content"}} display="flex" justifyContent={"center"} marginX="auto" marginRight={{md:"10"}}>

        <Box bgColor="myColor" width="fit-content"  marginX={"auto"}  p="8" paddingTop={"0"} display={"flex"}  justifyContent="center"  >
            <Image width={445} loading="lazy" height={513}  src="/About.jpg" alt="About" />
        </Box>
    </Box>
        <Box flexBasis={"50%"} display={"flex"} flexDirection="column" marginTop={{base:"8",md:"0"}} textAlign={{base:"center",md:"left"}}>
            <Text fontSize="lg">About Us</Text>
                  <Text fontWeight={"600"}  fontSize="4xl">The More Healthy Food The Better</Text>
                  <List  marginX={{base:"auto",md:"unset"}} marginTop={{base:"8"}} spacing={3}>
                      
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          Be Alive With Veggie Food.
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          It's The Place To Be.
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          Nonstop Veggie Food.
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          The Best Silk Dish In Town
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          Truffles, Egg & Pumpkin Spice
                      </ListItem>
                  </List>

        </Box>

    </Box>
    <Box margin="8" marginY="16" display={{md:"flex"}} justifyContent="center" alignItems="center">

    <Box order={"2"} width={{base:"80%",md:"max-content"}} display="flex" justifyContent={"center"} marginX="auto" >

        <Box bgColor="myColor" width="fit-content"  marginX={"auto"}  p="8" paddingTop={"0"} display={"flex"}  justifyContent="center"  >
            <Image width={445}  objectFit="cover" loading="lazy" height={513}  src="/Drinks.jfif" alt="Drinks" />
        </Box>
    </Box>
        <Box order={"1"} flexBasis={"50%"} display={"flex"} flexDirection="column" marginTop={{base:"8",md:"0"}} textAlign={{base:"center",md:"left"}} marginLeft={{md:"10"}} alignItems="flex-end">
            <div>


            <Text fontSize="lg">About Us</Text>
                  <Text fontWeight={"600"}  fontSize="4xl">The More Healthy Food The Better</Text>
                  <List  marginX={{base:"auto",md:"unset"}} marginTop={{base:"8"}} spacing={3}>
                      
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          Be Alive With Veggie Food.
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          It's The Place To Be.
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          Nonstop Veggie Food.
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          The Best Silk Dish In Town
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon  />
                          Truffles, Egg & Pumpkin Spice
                      </ListItem>
                  </List>
            </div>

        </Box>

    </Box>
    </Box>
  )
}
