// Material Kit 2 PRO React components
import Box from '@mui/material/Box';

// Sections components
// import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";
import Container from 'components/Container';

// Stats page components
import FooterOne from "./FooterOne";
// import FooterTwo from "layouts/sections/page-sections/footers/components/FooterTwo";
// import FooterThree from "layouts/sections/page-sections/footers/components/FooterThree";

// Stats page components code
import footerOneCode from "./FooterOne";
// import footerTwoCode from "layouts/sections/page-sections/footers/components/FooterTwo/code";
// import footerThreeCode from "layouts/sections/page-sections/footers/components/FooterThree/code";

function Footers() {
  return (
    <Container
      title="Footers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/footers" },
        { label: "Footers" },
      ]}
    >
        <Box title="Footer 1" code={footerOneCode} bgColor="white" pt={3} pl={{ xs: 3, lg: 0 }}>
          <FooterOne />
        </Box>
    </Container>
  );
}

export default Footers;
