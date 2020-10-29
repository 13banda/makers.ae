import DefaultLayout from '../layouts/default';
import { NextSeo } from 'next-seo';
import siteConfig from '../configs/site-config';
import { Avatar, AvatarGroup, Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/core';
import Image from 'next/image';

export default function Home() {
  return (
    <DefaultLayout>
      <NextSeo
        title={ 'Makers.ae — Community of makers in UAE' }
        description={ 'Makers.ae aims to build a community of developers in UAE.' }
        titleTemplate={ siteConfig.seo.titleTemplate }
      />

      <Box maxW='800px' mx='auto'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Box>
            <Text color='gray.500' fontSize='16px' fontWeight={ 600 }>Developers and designers in UAE</Text>
          </Box>
          <Box>
            <Button bg='yellow.400' rounded='20px' px='35px'>Join</Button>
          </Box>
        </Flex>

        <Flex my='40px'>
          <Heading lineHeight='48px' color='gray.500'><Text as='span' className='yellow-gradient-color'>Makers</Text> is the growing community of <Text as='span' className='purple-gradient-color'>developers</Text> and <Text className='red-gradient-color' as='span'>designers</Text> in UAE. Get connected, share your work, get feedback, join meetups, and stay updated.</Heading>
        </Flex>

        <Flex justifyContent='space-between' alignItems='center'>
          <Flex alignItems='center'>
            <Image className='rounded-full' height='48px' width='48px' src='/avatars/kamran.jpeg' />
            <Text ml='15px' as='span' color='gray.500'>
              Organized by&nbsp;
              <Link target='_blank' color='gray.300' fontWeight={700} href={ siteConfig.author.twitter }>Kamran</Link>
            </Text>
          </Flex>
          <Flex>
            <AvatarGroup max={20}>
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Adnan" src="/avatars/adnan.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Zeeshan" src="/avatars/zeeshan.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Meabed" src="/avatars/meabed.png" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Ahmed" src="/avatars/ahmed.png" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Mustafa" src="/avatars/mustafa.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Hany" src="/avatars/hany.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Amad" src="/avatars/amad.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Abdallah" src="/avatars/abdallah.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Maradona" src="/avatars/maradona.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Segun" src="/avatars/segun.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Pavlo" src="/avatars/pavlo.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Furqan" src="/avatars/furqan.jpeg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Umar" src="/avatars/umar.jpg" />
              <Avatar className='avatar-badge' width={'35px'} height='35px' borderColor='black' name="Pranjal" src="/avatars/pranjal.jpeg" />
            </AvatarGroup>
          </Flex>
        </Flex>
      </Box>
    </DefaultLayout>
  );
}
