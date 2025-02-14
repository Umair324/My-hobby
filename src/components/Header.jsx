import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
  import { IoMenu } from "react-icons/io5";

const Header = () => {

    const {isOpen,onOpen,onClose,} = useDisclosure();
  return (
    <>
      <Button
      pos={"fixed"}
      top={"4"}
      left={"4"}
      colorScheme='purple'
      p={"0"}
      w={"10"}
      h={"10"}
      zIndex={'overlay'}
      borderRadius={"full"}
      onClick={onOpen}  
      >
       <IoMenu size={"20"} /> 
      </Button> 
      <Drawer isOpen={isOpen} onClose={onClose}placement='left'>
      <DrawerOverlay />
      <DrawerContent>
       <DrawerCloseButton />
       <DrawerHeader>
        AFSA-U VLOGS
       </DrawerHeader>
       <DrawerBody>
        <VStack  alignItems={"flex-start"}>
          <Button variant={"ghost"} colorScheme='facebook'>
            <Link to={"/home"}>Home</Link>
          </Button>
          <Button onClick={onClose}  variant={"ghost"} colorScheme='facebook'>
            <Link to={"/videos"}>Videos</Link>
          </Button>
          <Button onClick={onClose}  variant={"ghost"} colorScheme='facebook'>
            <Link to={"/videos?category=free"}>Free Videos</Link>
          </Button>
          <Button onClick={onClose}  variant={"ghost"} colorScheme='facebook'>
            <Link to={"/upload"}>Upload Video</Link>
          </Button>
        </VStack>
        <HStack 
        pos={"absolute"}
         bottom={"10"} 
         left={"0"}
           w={"full"}
           justifyContent={"space-evenly"}
           >
          <Button onClick={onClose}  colorScheme='purple'>
            <Link to={"/login"}>Log in</Link>
          </Button>
          <Button onClick={onClose}  colorScheme='purple' variant={"outline"}>
            <Link to={'/Signup'}>Sign up</Link>
          </Button>
        </HStack>
       </DrawerBody>
    
      </DrawerContent>
      </Drawer> 
    </>
  )
}

export default Header