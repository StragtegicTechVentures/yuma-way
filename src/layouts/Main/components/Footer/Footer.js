import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// logos
import Logo from "../../../../logos/yuma-way-logo.png";
import LogoNegative from "../../../../logos/yuma-way-negative-logo.png";

const FooterStandard = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            component="a"
            href="/"
            title="theFront"
            width={200}
          >
            <Box
              component={"img"}
              src={mode === "light" ? Logo : LogoNegative}
              height={1}
              width={1}
            />
            
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="https://www.facebook.com/"
                color={mode === "light" ? "grey" : "white"}
                variant={"subtitle2"}
              >
                <FacebookIcon fontSize="large"  />
              </Link>
            </Box>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="https://www.instagram.com/"
                color={mode === "light" ? "grey" : "white"}
                variant={"subtitle2"}
              >
                <InstagramIcon fontSize="large"  />
              </Link>
            </Box>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="https://www.twitter.com/"
                color={mode === "light" ? "grey" : "white"}
                variant={"subtitle2"}
              >
                <TwitterIcon fontSize="large"  />
              </Link>
            </Box>
            <Box marginTop={1} marginRight={0}>
              <Link
                underline="none"
                component="a"
                href="https://www.linkedin.com/"
                color={mode === "light" ? "grey" : "white"}
                variant={"subtitle2"}
              >
                <LinkedInIcon fontSize="large"  />
              </Link>
            </Box>
          
          </Box>
          
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1} marginRight={3}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle1"}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={3}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle1"}
              >
                About
              </Link>
            </Box>
            <Box marginTop={1} marginRight={3}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle1"}
              >
                Careers
              </Link>
            </Box>
            <Box marginTop={1} marginRight={3}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle1"}
              >
                Contact
              </Link>
            </Box>
            <Box marginTop={1} marginRight={3}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle1"}
              >
                Privacy Policy
              </Link>
            </Box>
            <Box marginTop={1} marginRight={3}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle1"}
              >
                FAQ
              </Link>
            </Box>
            {/* <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="https://thefront.maccarianagency.com/docs/introduction"
                target={"blank"}
                color="text.primary"
                variant={"subtitle2"}
              >
                Documentation
              </Link>
            </Box> */}
            {/* <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="https://mui.com/store/items/the-front-landing-page/"
                size="small"
              >
                Shop Now
              </Button>
            </Box> */}
            </Box>
            
        </Box>
      </Grid>
      <Grid item xs={12} marginTop={2}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="text.secondary"
          gutterBottom
        >
          &copy; Yuma Way. 2023, All rights reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="text.secondary"
          component={"p"}
        >
          When you visit or interact with our sites, services or tools, we may
          use cookies for storing information to help provide you with a better,
          faster and safer experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterStandard;

