import { Box, Button, Flex, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import {FormEvent, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact() {

    const name = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const message = useRef<HTMLTextAreaElement | null>(null);
    const form = useRef<HTMLFormElement | null>(null);
    const toast = useToast();
    const [click, setClick] = useState<boolean>(false)
    const handleSubmit = async(e: FormEvent)=>{
        e.preventDefault();



        const params = {
            name:name.current!.value,
            email:email.current!.value,
            message:message.current!.value,
        }
        

        
        setClick(true)
        emailjs.sendForm(process.env.SERVICE_ID!, process.env.TEMPLATE_ID!, form.current!, process.env.PUBLIC_KEY)
            .then((result) => {
                toast({
                    title: 'Message sent',
                    description: "We will contact you soon",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                setClick(true);
                
            }, (error) => {
                console.log(error)
                toast({
                    title: 'Error',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
                setClick(false)
            });
    }

  return (
    <>
    
          <Flex justifyContent={"center"} width={{lg:"85%"}} marginX="auto" alignItems="center"  bgImage={"/Contact.jpg"} bgSize="cover" >

    <form ref={form} onSubmit={handleSubmit}>
        <Stack maxWidth={"600px"} spacing={"6"} color="white" textAlign={"center"}  p="8"  >
            <Text fontWeight={"600"} fontSize="4xl">
                Contact
            </Text>
            <Text  fontSize="xl">
                Feel Free To Contact Us And We Will Talk To You
            </Text>
                 <Input required name='name' ref={name} borderRadius="none" _focusVisible={{
                    borderColor:"brand.light"
                }} variant='outline' placeholder='Name' />
                 <Input required name='email' ref={email} borderRadius="none" _focusVisible={{
                     borderColor:"brand.light"
                 }} variant='outline' placeholder='Email' />
                  <Textarea required name='message' ref={message} borderRadius="none" _focusVisible={{
                      borderColor: "brand.light"
                    }} placeholder='Your Message'  />
                  <Button disabled={click} type='submit' marginY={"8"} width={{ base: "100%", lg: "unset" }} background={"brand.solid"} borderRadius="0" px={{ lg: "16" }} p="6" fontSize="xl" colorScheme={"teal"} >
                      Send
                  </Button>
        </Stack>
        
    </form>
                </Flex>
    </>
  )
}
