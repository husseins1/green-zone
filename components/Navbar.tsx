import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FC, useRef } from "react";
import MenuIcon from "./MenuIcon";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

const Navbar:FC = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
  return (

    <>
    <style jsx>
      {`
      .link{
        display:inline-block;
        padding:1rem;
        font-size:1.6rem
      }
      .hover{
        position:relative;
        transition:all .1s linear;
      }
      .hover::after{
        content:"";
        position:absolute;
        width:10px;
        height:10px;
        background:var(--color-light);
        border-radius:50%;
        left:50%;
        bottom:0;
        opacity:0;
        transition:all .1s linear;
        
      }
      .hover:hover.hover::after{
        opacity:1;
        transform:translateX(-50%)
      }
      .hover:hover{
        color:var(--color-light);
        
      }
      img{
        height:75px;
        cursor:pointer;
      }
      .link.lg{
        font-size:1.1rem;
      }
      .link.lg::after{
        width:7px;
        height:7px;
      }
      @media screen and (min-width:62em){
        img{
          height:85px;
        }
      }


      
      `}
    </style>
    <Flex  py={{lg:"8"}} alignItems="center" justifyContent={"space-between"}>
        <Box><img  src="/logo.svg" alt="logo" /></Box>

        <Flex display={{base:"none",lg:"flex"}} alignItems={"center"} justifyContent={"center"}  >
          <Box ><a className="link hover lg" href="#home">Home</a></Box>
          <Box><a className="link hover lg" href="#about">About Us</a></Box>
          <Box><a className="link hover lg" href="#services">Services</a></Box>
          <Box><a className="link hover lg" href="#contact">Contact</a></Box>
        </Flex>
          <Button display={{base:"inline-flex",lg:"none"}} py="6" border={"none"}  ref={btnRef} bg="none" textColor={"black"}  _hover={{
            "color":"brand.light",
            "transform":"rotateZ(90deg)"
            
            
            
          }}  _focusVisible={{
            "border":"none"
          }} onClick={onOpen}>
            
              <MenuIcon  />
          </Button>
          <Drawer
              isOpen={isOpen}
              placement='top'
              onClose={onClose}
              finalFocusRef={btnRef}
              size="full"
              
              
              >
              <DrawerOverlay display={{ lg: "none" }}  />
              <DrawerContent display={{lg:"none"}}>
                  <DrawerCloseButton />
                  

                  <DrawerBody >
                     <Flex alignItems={"center"} justifyContent={"center"} flexDirection="column" minHeight={"100vh"} >
                      <Box ><a className="link hover" href="#home">Home</a></Box>
                      <Box><a className="link hover" href="#about">About Us</a></Box>
                      <Box><a className="link hover" href="#services">Services</a></Box>
                      <Box><a className="link hover" href="#contact">Contact</a></Box>
                     </Flex>
                  </DrawerBody>

                  
              </DrawerContent>
          </Drawer>
    </Flex>
            </>
  )
}

export default Navbar;