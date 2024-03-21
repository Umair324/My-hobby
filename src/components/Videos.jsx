import { Heading, Stack, VStack ,Text, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

 
const Videos = () => {
  const videoArr = [
    'https://youtu.be/cmBFst-KiZ0',
    'https://youtu.be/MaAqLA0zUyA',
    'https://youtu.be/lzzH53Wq2mg',
    'https://youtu.be/PDgCzH1GXEY',
    'https://youtu.be/stcyS3Q1GtE',
    'https://youtu.be/Yall45hx95I',
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);
    
  return (
    <Stack direction={['column','row']} h={'100vh'}>
    <VStack w={'full'}>
      <video
      controls
      controlsList='nodownload'
      src={videoSrc}
      style={{width:'100%',

      }}
      >

      </video>
      <VStack
      alignItems={"flex-start"} p={'8'}
      w={"full"}
      overflowY={"auto"}
      >
        <Heading
        textTransform={"uppercase"}
        >This is our childhoods First Vlog</Heading>
        <Text>
        "Vlogging isn't just about capturing moments; it's about 
        creating connections and leaving a lasting impact."
        "Vlogging isn't just about capturing moment
        </Text>
      </VStack>
    </VStack>
    <VStack w={['full','xl']}
    alignItems={"stretch"}
    p={"8"}
    spacing={"8"}
    overflowY={"auto"}
    >
    
{
  videoArr.map((item,index)=>(
    <Button
   variant={'ghost'}
   colorScheme={'purple'}
   marginTop={"3px"}
   onClick={() =>setVideoSrc(item)}
   >
    VLOG BHARIA TOWN {index+1}
   </Button>
  ))
}
    </VStack>
    </Stack>
  )
}

export default Videos