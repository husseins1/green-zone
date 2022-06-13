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
    <Flex p={"4"} alignItems="center" justifyContent={"space-between"}>
        <Box><img style={{
            height:"75px"
        }} src="/logo.svg" alt="logo" /></Box>
          <Button display={{base:"inline-flex",lg:"none"}} py="6" border={"none"}  ref={btnRef} bg="none" textColor={"brand.light"}  _hover={{
            "color":"black",
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
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>
                     
                  </DrawerBody>

                  <DrawerFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                          Cancel
                      </Button>
                      <Button colorScheme='blue'>Save</Button>
                  </DrawerFooter>
              </DrawerContent>
          </Drawer>
    </Flex>
  )
}

export default Navbar;