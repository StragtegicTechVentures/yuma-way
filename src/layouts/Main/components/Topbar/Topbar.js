import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

// logos
import Logo from '../../../../logos/gardens-logo.png';
import LogoNegative from '../../../../logos/gardens-logo-negative.png';

// components
import { NavItem } from './components';

//theme toggler
import ThemeModeToggler from 'components/ThemeModeToggler';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    products: productsPages,
    company: companyPages,
    locations: locationsPages,
    // deals: dealsPages,
    stores: storePages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 180, md: 220, lg: 280 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? Logo
              : LogoNegative
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Our Products'}
            id={'products'}
            items={productsPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Locations'}
            id={'locations-pages'}
            items={locationsPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Deals'}
            id={'deals-pages'}
            items={dealsPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box marginLeft={4}>
          <NavItem
            title={'Current Store'}
            id={'store-pages'}
            items={storePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Shop Now
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
