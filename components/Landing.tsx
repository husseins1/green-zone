import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";


export default function Landing() {
  return (
    <Flex columnGap={"8"} alignItems={"center"} py="8" textAlign={"center"} flexDirection={{base:"column",lg:"row"}}>
      <Box  textAlign={{lg:"left"}}>
        <Text fontWeight={"bold"} marginBottom="8" fontSize="5xl"> We&apos; re Serious For Food.</Text>
        <Text fontSize={"lg"}>
          We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.
        </Text>
          <a  href="#menu">
        <Button  marginY={"8"} width={{base:"100%",lg:"unset"}} background={"brand.solid"} borderRadius="0" px={{lg:"16"}} p="8" fontSize="xl" colorScheme={"teal"} >
        
          Menu
          </Button>
          </a>
      </Box>
      <Box flex={"1 0 50%"}>
        
          <Image style={{
            flex: "1 0 50%",
          }} objectFit="contain" height={450} width={450}  src="/hero.jpg" alt="hero" />
      </Box>
    </Flex>
  )
}
