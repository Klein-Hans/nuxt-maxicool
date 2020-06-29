import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import ClientSection from "pages-sections/LandingPage-Sections/ClientSection.js";
import ServiceSection from "pages-sections/LandingPage-Sections/ServiceSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="MaxiCool"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "darkPrimary",
          backgroundColor: "#192d36 !important"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/landing-bg.png")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem align="center" xs={12} sm={12} md={12}>
              <h1 className={classes.title}>BUILDING THE FUTURE</h1>
            </GridItem>
            <GridItem align="justify" xs={12} sm={12} md={8}>
              <h4 className={classes.subtitle}>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              {/* <Button
                color="primary"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>  
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ServiceSection />
          <ProductSection />
          <ClientSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
