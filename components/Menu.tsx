import { Button, Container, Grid, GridItem, List, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import CheckIcon from './CheckIcon';

const items:item[] = [
    {
      ar:{
        title:"سلطة التونة",
        ingredients:[
            "تونا",
            "خيار",
            "طماطم",
            "لهانة",
            "ذرة",
        ]
      },
      en:{
        title:"Tuna Salad",
        ingredients:[
            "Tuna",
            "Cucumber",
            "Tomato",
            "Corn",
            "Lettuce"
        ]
      },
      price:"6000",
      url:"/tuna.png" 
    },
    
    {
      ar:{
        title:"سلطة الافوكادو",
        ingredients:[
            "افوكادو",
            "جوز",
            "بصل احمر",
            "طماطم",
            "فلفل اخضر",
            "فلفل احمر",
            "فلفل اسود",
            "ليمون",
            "كزبرة مجففة",
        ]
      },
      en:{
        title:"Avocado Salad",
        ingredients:[
            "Avocado",
            "Walnut",
            "Red onion",
            "Tomato",
            "Red Pepper",
            "Green Pepper",
            "Black Pepper",
            "Lemon",
            "Dry coriander",
        ]
      },
      price:"7500",
      url:"/avocado.png" 
    },
    {
      ar:{
        title:"سلطة الكينوا",
        ingredients:[
            "كينوا",
            "شمندر",
            "رمان",
            "جرجير",
            "ذرة",
            "بقدونس",
        ]
      },
      en:{
        title:"Keno Salad",
        ingredients:[
            "Keno",
            "Corn",
            "pomegranate",
            "Watercress",
            "Parsley",
            "Beets",
        ]
      },
      price:"5000",
      url:"/keno.png" 
    },
    {
      ar:{
        title:"سلطة الجرجير",
        ingredients:[
            "جرجير",
            "جبن",
            "خل",
            "طماطم",
            "فلفل اسود",
            "صنوبر",
            "فاصوليا حمراء",
            "بصل احمر",
            "زيت الزيتون",
        ]
      },
      en:{
        title:"Watercress Salad",
        ingredients:[
            "Watercress",
            "Chesse",
            "Vinegar",
            "Tomato",
            "Black Pepper",
            "Oak",
            "Red beans",
            "Red onoin",
            "Olive oil",
        ]
      },
      price:"6500",
      url:"/watercress.png" 
    },
    {
      ar:{
        title:"سلطة البحر الاحمر",
        ingredients:[
            "مكعبات جبن",
            "خيار",
            "لهانة",
            "طماطم",
            "زيتون اسود",
           
        ]
      },
      en:{
        title:"White Sea Salad",
        ingredients:[
            "Cubic Cheese",
            "Cucumber",
            "Lettuce",
            "Tomato",
            "Black olive",
        ]
      },
      price:"5000",
      url:"/white sea.png" 
    },
    {
      ar:{
        title:"سلطة الشمندر",
        ingredients:[
            "شمندر احمر",
            "خل",
            "جبن فيتا",
            "صنوبر",
            "بصل احمر",
            "زيتون اسود",
            "فلفل اسود",
           
        ]
      },
      en:{
        title:"Beets Salad",
        ingredients:[
            "Beets",
            "Vinegar",
            "Vita cheese",
            "Oak",
            "Black oil",
            "Black Pepper",
            "Black Olive",
        ]
      },
      price:"4500",
      url:"/beets.png" 
    },
    {
      ar:{
        title:"سلطة القيصر",
        ingredients:[
            "لهانة",
            "دجاج مقلي",
            "صلصة السيزر",
            
           
        ]
      },
      en:{
        title:"Caesar Salad",
        ingredients:[
            "Lettuce",
            "Chicken",
            "Caesar sauce",
            
        ]
      },
      price:"5000",
      url:"/caesar.png" 
    },
    {
      ar:{
        title:"سلطة يونانية",
        ingredients:[
            "طماطم",
            "خيار",
            "جبن",
            "ليمون",
            "فلفل اخضر",
            "اوركانو",
            "زيتون اسود",
            "فلفل اسود",
            "فلفل اخضر",
            "بصل احمر",
            "زيت الزيتون",
            
           
        ]
      },
      en:{
        title:"Greek Salad",
        ingredients:[
            "Tomato",
            "Cheese",
            "Lemon",
            "Green Pepper",
            "Black Pepper",
            "Black olive",
            "Olive oil",
            "Red onion", 
        ]
      },
      price:"6000",
      url:"/greek.png" 
    },
    {
      ar:{
        title:"سلطة بار",
        ingredients:[
            "سلط على ذوقك",
            
            
           
        ]
      },
      en:{
        title:"Bar Salad",
        ingredients:[
            "Put in it what you like",
            
        ]
      },
      price:"3500-5000",
      url:"/bar salad.png" 
    },
    
]
const lang = 'en';

interface item{
    ar:{
        title:string,
        ingredients:string[]
    },
    en:{
        title:string,
        ingredients:string[]
    },
    price:string,
    url:string

}

export default function Menu({lang}:{lang:"ar" | "en"}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [select,setSelect] = useState<item>(items[0]);
  return (
    <>
    <Container id='menu' textAlign={"center"} maxWidth={"7xl"}>

        <Text  fontSize="lg" >
            Menu
        </Text>

        <Text   fontSize="4xl" fontWeight={"600"}>
            Our Most Popular Foods
        </Text>
              <Text marginBottom={"8"} color={"brand.solid"} fontWeight="600"  fontSize="xl" >
            {lang === "en"?"Call 6464 For Delivery":"اتصل على 6464 للتوصيل"}
        </Text>

        <Grid justifyContent={"center"} gap={"4"}  templateColumns={{base:"repeat(auto-fit,minmax(260px,268px))"}} >
            {items.map((ele:item,index)=>(
                <GridItem key={index} px={"4"} py="6" border={"2px"} borderColor="brand.light" >
                    <Image loading='lazy' style={{
                        borderRadius: "50%",

                    }} alt={ele[lang].title} src={ele.url} width={"190px"} height={"190px"} />

                    <Text marginY="8" fontSize="lg" fontWeight={"400"}>
                        {ele[lang].title}

                    </Text>
                    <Text marginY="8" fontSize="lg" fontWeight={"400"}>
                       {ele.price} {lang === "en"?"IQD":"دينار"}

                    </Text>
                    <Button onClick={()=>{
                        onOpen();
                        setSelect(ele)
                    }} variant={"outline"}
                        borderColor={"brand.light"}
                        color={"brand.light"}
                        fontWeight={"400"}
                        borderRadius="none" colorScheme="teal">
                        View Now
                    </Button>
                </GridItem >

            ))}
            
            </Grid>



    </Container>
          <Modal   size={{base:"sm",md:"2xl",lg:"4xl"}} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay   />
              <ModalContent bg="teal" color={"white"} >
                  <ModalHeader>{select[lang]?.title}</ModalHeader>
          <ModalCloseButton  />
                  <ModalBody 
                   
                   display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
                    

                      <Image style={{
                        borderRadius:"50%"
                      }}  loading='lazy'src={select.url} alt={select[lang].title} width={400} height={400} />
                   
                    <Text marginBottom={"4"} fontSize={"2xl"}>{lang ==="en"?"Ingredients":"المكونات"}</Text>
                      <List spacing={2}>
                        {select[lang].ingredients.map((ele,index)=>(
                          <ListItem dir={lang==="en"?'ltr':'rtl'} fontSize={"md"} key={index} textAlign={"left"} display={"flex"} alignItems="center" >
                              <CheckIcon lang={lang} size={16} color="#fff" />
                              {ele}
                          </ListItem>

                        ))}
                      </List>
                  </ModalBody>

                  <ModalFooter >
                      <Button colorScheme='teal' mx={"auto"}  onClick={onClose}>
                          <a target={"_blank"} rel="noreferrer" href="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=f276de98-5de2-4193-9056-64094039c4d9&restaurant_uid=8b7d98ae-2de2-4833-996c-f692d16469be&facebook=true">{lang ==="en"?"Order Now":"اطلب الان"}</a>

                      </Button>
                     
                  </ModalFooter>
              </ModalContent>
          </Modal>
    </>
  )
}
