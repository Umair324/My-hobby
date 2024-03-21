import React from 'react'
import {  Button, Container, Heading, Input, Link, VStack,Text} from '@chakra-ui/react'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"}
    p={"16"}
    >
<form>
    <VStack
    alignItems={"stretch"}
    spacing={"8"}
    w={['full','96']}
    m={"auto"}
    my={"16"}
    >
    <Heading>Welcome Back</Heading>
<Input
placeholder={"Enter your Email"}
type={"email"}
required
focusBorderColor={"purple.500"}
>
</Input>
<Input
placeholder={"Enter your Password"}
type={"Password"}
required
focusBorderColor={"purple.500"}
>
</Input>
<Button
variant={"link"}
alignSelf={'flex-end'}
>
<Link to={'/forgetpassword'}>
    Forget Password?
</Link>
</Button>
<Button colorScheme={"purple"} type={'submit'}>
    Login
</Button>
<Text textAlign={'right'}>
        New User?{' '}
        <Button  
        variant={'link'} 
        colorScheme={'purple.500'}>
       <Link to={'/'}>Sign up</Link>
</Button> 
</Text>
    </VStack>
</form>
    </Container>
  )
}

export default Login