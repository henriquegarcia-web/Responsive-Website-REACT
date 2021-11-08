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

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo></HeroVideo>
      <Container>
        <MainHeading></MainHeading>
        <HeroText>We provide the best security systems for clients all over the world</HeroText>
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