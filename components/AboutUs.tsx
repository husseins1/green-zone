import { Box, Grid, Text,GridItem } from "@chakra-ui/react";
import {
    List,
    ListItem,
    
} from '@chakra-ui/react'
import Image from "next/image"
import CheckIcon from "./CheckIcon";
const services = [
    {
        en:{
            title:"Free Shipping",
            subtitle:"Orders over 140$",

        },
        ar:{
            title:"توصيل مجاني",
            subtitle:"للطلبات فوك 20 الف"
        },
    url:"/truck.svg",
},
    {
        en:{
            title:"Quick Payment",
            subtitle:"100% secure payment",

        },
        ar:{
            title:"دفع سريع",
            subtitle:"دفع عند التوصيل"
        },
    url:"/wallet.svg",
},
    {
        en:{

            title:"Special Promo",
            subtitle:"Get special promo",
        },
        ar:{

            title:"خصم خاص",
            subtitle:"50% خصم",
        },
    url:"/percentage.svg",
},
    {
        en:{
            title:"24/7 Support",
            subtitle:"Ready support",

        },
        ar:{
            title:"24/7 مفتحين",
            subtitle:"دعم جاهز على 6464",

        },
    url:"/headphones.svg",
},


]

export default function AboutUs({lang}:{lang:"en" | "ar"}) {
  return (
    <Box id="about"  marginY="20">
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

                    <Box marginBottom={{ base: "4", xl: "0" }} marginLeft={{ base: "auto", xl: lang === "en" ? "unset" : "4" }} marginRight={{base:"auto",xl:lang ==="en"?"4":"unset"}} display={"flex"} justifyContent="center" alignItems={"center"} width="70px" height="70px" borderRadius={"xl"} bgColor={"myColor"}>
                    <img src={ele.url} alt={ele[lang].title}/>
                </Box>
                <Box textAlign={{xl:lang==="en"?"left":"right"}}>

                <Text fontSize="lg" >
                    {ele[lang].title}
                </Text>
                <Text color={"gray.500"} fontSize="md" >
                    {ele[lang].subtitle}
                </Text>
                </Box>

                </GridItem>
            ))
        }
    
    </Grid>
    <hr className="hr" />

    <Box margin="8" display={{md:"flex"}} justifyContent="center" alignItems="center">

    <Box width={{base:"80%",md:"max-content"}} display="flex" justifyContent={"center"} marginX="auto" marginRight={{md:lang==="en"?"10":"0px"}} marginLeft={{md:lang==="en"?"0px":"10"}}>

        <Box bgColor="myColor" width="fit-content"  marginX={"auto"}  p="8" paddingTop={"0"} display={"flex"}  justifyContent="center"  >
            <Image width={445} loading="lazy" height={513}  src="/About.jpg" alt="About" />
        </Box>
    </Box>
        <Box flexBasis={"50%"} display={"flex"} flexDirection="column" marginTop={{base:"8",md:"0"}} textAlign={{base:"center",md:lang==="en"?"left":"right"}}>
                  <Text fontSize="lg">{lang === "en" ? "About Us" : "من نحن"}</Text>
                  <Text fontWeight={"600"} fontSize="4xl">{lang === "en" ? "The More Healthy Food The Better" : "كرين زون للاكل الصحي"}</Text>
                  <List  marginX={{base:"auto",md:"unset"}} marginTop={{base:"8"}} spacing={3}>
                      
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon lang={lang}  />
                          {lang === "en" ?"Be Alive With Veggie Food.":"كن منتعشا مع الاكل الصحي"}
                          
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon lang={lang}  />
                          {lang === "en" ? "It's The Place To Be." : "انه المكان الامثل"}
                          
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon lang={lang}  />
                          {lang === "en" ? " Nonstop Veggie Food." : "اشبع صحة"}
                         
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >

                          <CheckIcon lang={lang}  />
                          {lang === "en" ? "The Best Silk Dish In Town" : "افضل السلطات في المنطقة"}
                          
                      </ListItem>
                      <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                          <CheckIcon lang={lang}  />
                          {lang === "en" ? "Truffles, Egg & Pumpkin Spice" : "سوي سلطة على ذوقك"}
                          
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
              <Box order={"1"} flexBasis={"50%"} display={"flex"} flexDirection="column" marginTop={{ base: "8", md: "0" }} textAlign={{ base: "center", md: lang === "en" ? "left" : "right" }}  alignItems={{base:"center",lg:lang==="en"?"flex-end":"flex-start"}} >
                  <Box marginRight={{ md: lang === "en" ? "0" : "20" }} display={"flex"} flexDirection="column"  >


                      <Text fontSize="lg">{lang === "en" ? "About Us" : "من نحن"}</Text>
                      <Text fontWeight={"600"} fontSize="4xl">{lang === "en" ? "The More Healthy Food The Better" : "كرين زون للاكل الصحي"}</Text>
                  <List  marginX={{base:"auto",md:"unset"}} marginTop={{base:"8"}} spacing={3}>
                      
                          <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                              <CheckIcon lang={lang} />
                              {lang === "en" ? "Be Alive With Veggie Food." : "كن منتعشا مع الاكل الصحي"}

                          </ListItem>
                          <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                              <CheckIcon lang={lang} />
                              {lang === "en" ? "It's The Place To Be." : "انه المكان الامثل"}

                          </ListItem>
                          <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                              <CheckIcon lang={lang} />
                              {lang === "en" ? " Nonstop Veggie Food." : "اشبع صحة"}

                          </ListItem>
                          <ListItem textAlign={"left"} display={"flex"} alignItems="start" >

                              <CheckIcon lang={lang} />
                              {lang === "en" ? "The Best Silk Dish In Town" : "افضل السلطات في المنطقة"}

                          </ListItem>
                          <ListItem textAlign={"left"} display={"flex"} alignItems="start" >
                              <CheckIcon lang={lang} />
                              {lang === "en" ? "Truffles, Egg & Pumpkin Spice" : "سوي سلطة على ذوقك"}

                          </ListItem>
                  </List>
            </Box>

        </Box>

    </Box>
    </Box>
  )
}
