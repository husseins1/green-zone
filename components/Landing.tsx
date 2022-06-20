import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import {motion} from "framer-motion"

export default function Landing({lang}:{lang:string}) {
  return (
    <Flex  columnGap={"8"} alignItems={"center"} py="8" textAlign={"center"} flexDirection={{base:"column",lg:"row"}}>
      <Box  textAlign={{lg:lang === 'en'?"left":"right"}}>
        <Text fontWeight={"bold"} marginBottom="8" fontSize="5xl">{lang === "en" ?"We're Serious For Food.":"اكثر من مجرد سلط"} </Text>
        <Text fontSize={"lg"}>
          {lang === "en" ? "We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place." : "نحن نعمل جاهدين على تقديم افضل واجود انواع السلطات الصحية."}
          
        </Text>
          <a  href="#menu">
        <Button  marginY={"8"} width={{base:"100%",lg:"unset"}} background={"brand.solid"} borderRadius="0" px={{lg:"16"}} p="8" fontSize="xl" colorScheme={"teal"} >
        
            {lang === "en" ? "Menu" : "المنيو"}
          </Button>
          </a>
      </Box>
      
      <Box flex={"1 0 50%"}>
        
        <motion.div  initial={{ x:lang==="en"?500: -500 }}
          whileInView={{ x:0}}
          transition={{duration:.5}}
          viewport={{ once: true }} >
          <Image style={{
            flex: "1 0 50%",
            transform:lang==="en"?"scaleX(-1)":"scaleX(1)"
          }} objectFit="contain" height={450} width={450}  src="/hero.jpg" alt="hero" />

        </motion.div>
      </Box>
    </Flex>
  )
}
