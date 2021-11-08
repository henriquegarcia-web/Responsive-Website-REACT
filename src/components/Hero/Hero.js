import React from 'react'

import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton
} from './HeroElements';

import Video from "./hero_video_01.mp4";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo autostart autoPlay src={Video} type="video/mp4" />
      <Container>

        <MainHeading>Your data is secure with us</MainHeading>
        
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        
        <ButtonWrapper>
          <Link to='signup'>
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>

      </Container>
    </HeroSection>
  )
}

export default Hero