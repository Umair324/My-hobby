import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'

import { IoIosArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={"40"} p={"16"} color={"white"}>
    <Stack direction={['column','row']}>
    <VStack alignItems={'stretch'} px={'4'} w={'full'}>
        <Heading textTransform={"uppercase"} fontSize={'28px'} textAlign={['center','left']}>
            Subscribe Our channel
        </Heading>
        <HStack
        borderBottom={'2px solid white'}
        py={"2px"}
        >
        <Input placeholder={'Enter your Mail here..'} 
        border={'none'} borderRadius={'none'} outline={'none'}
        focusBorderColor='none'
         />
            <Button
            p={"0"}
            colorScheme={'purple'}
            variant={"ghost"}
            borderRadius={'0px 20px 20px 0px'}

            >
                <IoIosArrowDropright size={20}/>
            </Button>
        </HStack>
        </VStack>
        <VStack w={'full'}
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}
        >
         <Heading textTransform={'uppercase'}
        textAlign={'center'}
        >
           Vlog hubs
        </Heading>
        <Text>
            All Rights recived @Afsa-u
        </Text>

        </VStack>
        <VStack w={'full'}
        >
       <Heading size={'20px'} textTransform={'uppercase'}>
    Social Media
       </Heading>
    <Button variant={'link'} colorScheme={'white'}>
   <a target={'_blank'} href='www.linkedin.com/in/
umair-rasheed-654a742a0
'>Linkden</a>
    </Button>
    <Button variant={'link'} colorScheme={'white'}>
   <a target={'_blank'} href=''>Instagram</a>
    </Button>
    <Button variant={'link'} colorScheme={'white'}>
   <a target={'_blank'} href=''>Facebok</a>
    </Button>
        </VStack>
    </Stack>
    </Box>
  )
}

export default Footer