import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//card images
import Flower from '../../../../images/homeImages/flower-pattern.png'
import Edible from '../../../../images/homeImages/edible-pattern.png'
import Concentrate from '../../../../images/homeImages/concentrate-pattern.png'
import Topicals from '../../../../images/homeImages/concentrate-pattern.png'

const mock = [
  {
    media: Flower,
    title: 'Flower',
  },
  {
    media: Edible,
    title: 'Edibles',
  },
  {
    media: Concentrate,
    title: 'Concentrates',
  },
  {
    media: Topicals,
    title: 'Topicals',
  },
];

const Products = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Massive Selection of THC the finest Products
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Visit your nearest Yuma Way location for access to the largest selection of cannabis products.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 300, md: 380, lg: 420 },
                    overflow: 'hidden',
                  }}
                />
                <CardContent>
                  <Typography
                    variant={'h4'}
                    align={'center'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
