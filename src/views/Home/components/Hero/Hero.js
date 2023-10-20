import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// import useMediaQuery from '@mui/material/useMediaQuery';
import {  useTheme } from '@mui/material/styles';

//hero banner images
import primaryHero from '../../../../banners/primary-hb.png'
import monthlySpecialsHero from '../../../../banners/november-hb.png'
import salesHero from '../../../../banners/sale-banner-hb.png'

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();

  const SlideDeck = () => {
    const sliderOpts = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: true,
      // cssEase: "linear"
    };

    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& .slick-slide img': {
            objectFit: 'cover',
          },
          '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
            height: { xs: 'auto', md: 1 },
          },
          '& .slick-prev, & .slick-next': {
            zIndex: 2,
            bottom: 0,
            top: '50%',
            left: '95%',
            right: 0,
            transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
            marginLeft: theme.spacing(-2),
            width: 32,
            height: 32,
            '&:before': {
              fontSize: 32,
            },
          },
          '& .slick-prev': {
            marginLeft: theme.spacing(-7),
            left: '10%',
          },
        }}
      >
        <Slider {...sliderOpts}>
          {[
            primaryHero,
            monthlySpecialsHero,
            salesHero,
          ]
          .map((item) => (
            <Box
              key={item}
              component={'img'}
              loading="lazy"
              src={item}
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
            />
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingTop={'70px !important'} paddingX={0} paddingY={0} maxWidth={{ sm: 'auto', md: 'auto', lg: 'auto', xl: '100%' }}>        
        <SlideDeck />   
      </Container>
      <Divider />
    </Box>
  );
};

export default Hero;
