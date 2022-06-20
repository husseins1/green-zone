import { Box, Button, Flex, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import {FormEvent, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact({lang}:{lang:string}) {

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
    <style jsx>
        {`
        .logo{
            margin:1rem auto;
        }
        .icon{
            margin-left:1rem;
            margin-right:1rem;
        }
        .icon:hover path{
            fill:var(--color-light);
            
        }
        .panda{
            color:var(--color-solid);
        }
        `}
    </style>
    
          <Flex id="contact" marginY={"8"} justifyContent={"center"} width={{lg:"85%"}} marginX="auto" alignItems="center"  bgImage={"/Contact.jpg"} bgSize="cover" >

    <form ref={form} onSubmit={handleSubmit}>
        <Stack maxWidth={"600px"} spacing={"6"} color="white" textAlign={"center"}  p="8"  >
            <Text fontWeight={"600"} fontSize="4xl">
                
                {lang === "en"?"Contact":"التواصل"}
            </Text>
            <Text  fontSize="xl">
                          {lang === "en" ? "Feel Free To Contact Us And We Will Talk To You" : "اتواصل ويانة وشاركنا رايك بالاكل او للاستفسار"}
                
            </Text>
                 <Input required name='name' ref={name} borderRadius="none" _focusVisible={{
                    borderColor:"brand.light"
                }} variant='outline' placeholder={lang==="en"?'Name':"الاسم"} />
                 <Input required name='email' ref={email} borderRadius="none" _focusVisible={{
                     borderColor:"brand.light"
                      }} variant='outline' placeholder={lang === "en" ? 'Email' : "البريد الالكتروني"} />
                  <Textarea required name='message' ref={message} borderRadius="none" _focusVisible={{
                      borderColor: "brand.light"
                      }} placeholder={lang === "en" ? 'Message' : "الرسالة"}  />
                  <Button disabled={click} type='submit' marginY={"8"} width={{ base: "100%", lg: "unset" }} background={"brand.solid"} borderRadius="0" px={{ lg: "16" }} p="6" fontSize="xl" colorScheme={"teal"} >
                          {lang === "en" ? 'Send' : "ارسال"}
                  </Button>
        </Stack>
        
    </form>
         </Flex>
         <footer>
                <Box p="8" textAlign={"center"}>
                    <img className='logo' src="/logo.svg" alt="logo" width={170} />
                    <Text fontSize={"xl"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio.
                    </Text>
                    <Flex  marginY="4" alignItems={"center"} justifyContent={"center"}>

                      <a rel="noreferrer" target="_blank" href='https://www.facebook.com/green.zone.iq/'>
                      <svg className="icon"  width="12" height="21" viewBox="0 0 12 21"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.7 12.0656L11.266 8.37756H7.727V5.98356C7.70214 5.70773 7.73973 5.42983 7.83698 5.17051C7.93423 4.9112 8.08864 4.67711 8.28875 4.48565C8.48886 4.29418 8.72953 4.15025 8.99289 4.06454C9.25625 3.97883 9.53553 3.95355 9.81 3.99056H11.419V0.850562C10.473 0.697834 9.51713 0.614611 8.559 0.601562C5.644 0.601563 3.739 2.36856 3.739 5.56556V8.37656H0.5V12.0646H3.74V20.9816H7.727V12.0656H10.7Z" fill="#1D1D1F" />
                      </svg>
                            
                        </a>
                      <a rel="noreferrer" target="_blank" href='https://www.instagram.com/green.zone.iq/'>
                      <svg className="icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.423 4.99153C8.51835 4.99153 7.63401 5.25979 6.88182 5.76239C6.12963 6.26499 5.54337 6.97935 5.19718 7.81514C4.85098 8.65093 4.7604 9.57061 4.93689 10.4579C5.11338 11.3451 5.54901 12.1602 6.18869 12.7998C6.82838 13.4395 7.64339 13.8752 8.53066 14.0516C9.41793 14.2281 10.3376 14.1376 11.1734 13.7914C12.0092 13.4452 12.7235 12.8589 13.2261 12.1067C13.7287 11.3545 13.997 10.4702 13.997 9.56553C13.9981 8.96457 13.8805 8.36931 13.651 7.81389C13.4215 7.25847 13.0846 6.75382 12.6597 6.32888C12.2347 5.90393 11.7301 5.56705 11.1746 5.33756C10.6192 5.10807 10.024 4.99048 9.423 4.99153ZM9.423 12.5385C8.835 12.5385 8.2602 12.3642 7.77129 12.0375C7.28238 11.7108 6.90133 11.2465 6.67631 10.7032C6.45129 10.16 6.39241 9.56223 6.50713 8.98553C6.62184 8.40882 6.90499 7.87909 7.32077 7.4633C7.73655 7.04752 8.26629 6.76437 8.843 6.64966C9.4197 6.53494 10.0175 6.59382 10.5607 6.81884C11.104 7.04386 11.5683 7.42491 11.895 7.91382C12.2216 8.40273 12.396 8.97753 12.396 9.56553C12.3944 10.3535 12.0807 11.1088 11.5235 11.666C10.9663 12.2232 10.211 12.5369 9.423 12.5385ZM15.25 4.80453C15.25 5.01557 15.1874 5.22186 15.0702 5.39733C14.9529 5.57279 14.7863 5.70955 14.5913 5.79031C14.3964 5.87107 14.1818 5.8922 13.9748 5.85103C13.7679 5.80986 13.5777 5.70824 13.4285 5.55902C13.2793 5.40979 13.1777 5.21967 13.1365 5.01269C13.0953 4.80572 13.1165 4.59118 13.1972 4.39621C13.278 4.20124 13.4147 4.0346 13.5902 3.91735C13.7657 3.80011 13.972 3.73753 14.183 3.73753C14.3233 3.737 14.4623 3.76423 14.5921 3.81766C14.7218 3.87108 14.8397 3.94964 14.939 4.04881C15.0383 4.14798 15.1169 4.26581 15.1705 4.39551C15.224 4.52521 15.2514 4.66422 15.251 4.80453H15.25ZM18.275 5.88653C18.3045 4.4996 17.7868 3.15679 16.834 2.14853C15.8237 1.19894 14.4823 0.681816 13.096 0.707531C11.623 0.623531 7.209 0.623531 5.736 0.707531C4.35013 0.679883 3.00847 1.19566 1.998 2.14453C1.04931 3.15497 0.534171 4.49683 0.563 5.88253C0.479 7.35553 0.479 11.7695 0.563 13.2425C0.533527 14.6295 1.05118 15.9723 2.004 16.9805C3.01461 17.9289 4.35534 18.4455 5.741 18.4205C7.214 18.5045 11.628 18.5045 13.101 18.4205C14.4879 18.45 15.8307 17.9324 16.839 16.9795C17.7865 15.9687 18.3018 14.6278 18.275 13.2425C18.363 11.7695 18.363 7.35953 18.275 5.88653ZM16.375 14.8205C16.2237 15.2055 15.9946 15.5551 15.7021 15.8476C15.4096 16.1401 15.06 16.3692 14.675 16.5205C13.501 16.9865 10.714 16.8785 9.417 16.8785C8.12 16.8785 5.329 16.9785 4.159 16.5205C3.77403 16.3692 3.4244 16.1401 3.1319 15.8476C2.83941 15.5551 2.61034 15.2055 2.459 14.8205C1.993 13.6465 2.101 10.8595 2.101 9.56253C2.101 8.26553 2.001 5.47453 2.459 4.30453C2.61034 3.91957 2.83941 3.56993 3.1319 3.27743C3.4244 2.98494 3.77403 2.75588 4.159 2.60453C5.333 2.13853 8.12 2.24653 9.417 2.24653C10.714 2.24653 13.505 2.14653 14.675 2.60453C15.06 2.75588 15.4096 2.98494 15.7021 3.27743C15.9946 3.56993 16.2237 3.91957 16.375 4.30453C16.841 5.47853 16.733 8.26553 16.733 9.56253C16.733 10.8595 16.843 13.6525 16.375 14.8205Z" fill="#1D1D1F" />
                      </svg>

                        </a>

                    </Flex>

                    </Box>
                    <Text marginBottom="8" textAlign={"center"} fontSize="lg">
                  Designed By <a className="panda" target="_blank" href='https://new-panda-portfolio.vercel.app/' rel="noreferrer" >Panda</a>
                    </Text>
         </footer>
    </>
  )
}
