import React from 'react';
import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/Ancient.jpg'
import img2 from '../assets/Bharia.jpg'
import img3 from '../assets/Goth.jpg'
import img4 from '../assets/Masjid.jpg'
import img5 from '../assets/Seaview.jpg'
import img6 from '../assets/sharjeel.jpg'
const headingOptions = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
  size: "2xl"
  
};

const Home = () => {
  return (
    <Box>
      <Mycarousel />
      <Container maxW={'container.xl'} minH={"100vh"} p={"16"}>
        <Heading textTransform={"uppercase"} w={"fit-content"} borderBottom={"2px"} py={2} m={"auto"}>
          Our Vlogging Team
        </Heading>
        <Stack 
      h={"full"}
      p={"4"}
      alignItems={"center"}
      direction={['column','row']}
      >
<Image src={img6} borderRadius={'full'} h={['40','400']} filter={'hue-Rotate=(-130deg)'} />
      <Text letterSpacing={"widest"} p={['3','12']} lineHeight={"190%"}>
        <Heading
        font={"bold"}
        >Sharjeel Ahmed</Heading>
        Sharjeel is a versatile professional, proficient both as
         an advisor and a videographer. He is an essential member of  
         the ASFA-U Graphy team, contributing expertise in both advisory capacities
          and video production.As an advisor, Sharjeel brings valuable insights 
          and strategic guidance to the team. With a keen eye for detail and a strong 
           analytical mindset, he helps navigate complex challenges and provides 
           thoughtful recommendations to optimize projects and workflows.In his 
           role as a videographer, Sharjeel showcases his creative 
           prowess and technical skills. He possesses a deep understanding
            of visual storytelling, utilizing various techniques to capture 
            compelling footage that resonates with audiences.Sharjeel's work 
            elevates the overall quality of ASFA-U Graphy's video content.
      </Text>
      </Stack>
      </Container>
 
    </Box>
  );
};

const Mycarousel = () => (
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w={"full"} h={"100vh"} position="relative">
      <Image src={image1} w={"full"} h={"full"} objectFit={'cover'} />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        First Vlog Bharia Town
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"} position="relative">
      <Image src={img2} w={"full"} h={"full"} objectFit={'cover'}  />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Second Vlog Seaview
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"} position="relative">
      <Image src={img3} w={"full"} h={"full"} objectFit={'cover'}  />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Third Vlog Port Grand
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"} position="relative">
      <Image src={img4} w={"full"} h={"full"} objectFit={'cover'}  />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Fourth VLOG Saddar
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"} position="relative">
      <Image src={img5} w={"full"} h={"full"} objectFit={'cover'}  />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        FIFITH VLOG Gothbachal
      </Heading>
      <Stack h={"full"} p={"4"} alignItems={"center"} direction={['column', 'row']} />
    </Box>
  </Carousel>
);

export default Home;
