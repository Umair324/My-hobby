import { Avatar, Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={"100vh"} p={"16"}>
    <form>
        <VStack
        alignItems={'stretch'}
        spacing={'6'}
        w={['full','96']}
        m={"auto"}
        my={'16'}
         >
         <Heading>AFSA-U VLOGS</Heading>
         <Avatar alignSelf={"center"} boxSize={'32'} />
         <Input
         placeholder={'Name..'}
         type={'text'}
         required
         focusBorderColor={'purlpe.500'}

         >
         </Input>
         <Input
         placeholder={'Enter Your Email..'}
         type={'Email'}
         required
         focusBorderColor={'purlpe.500'}

         >
         </Input>
         <Input
         placeholder={'Enter Your Password..'}
         type={'password'}
         required
         focusBorderColor={'purlpe.500'}

         >
         </Input>
   <Button colorScheme={'purple'} type={'submit'}>
    Signup
   </Button>
   <Text textAlign={'right'}>
        Already signuped?{' '}
        <Button  
        variant={'link'} 
        colorScheme={'purple.500'}>
       <Link to={'/login'}>Login</Link>
</Button> 
</Text>
        </VStack>
    </form>
    </Container>
  )
}

export default Signup