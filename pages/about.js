import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/nextjs-material-kit/pages/aboutUsPage.js";
import maintenancegImg from "assets/img/maintenance.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AboutPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgCard,
    classes.imgRaised,
    classes.imgSize
  );
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
      <Parallax filter responsive image={require("assets/img/featured-service.png")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem align="center" xs={12} sm={12} md={12}>
              <h1 className={classes.title}>ABOUT US</h1>
            </GridItem>
            <GridItem align="justify" xs={12} sm={12} md={8}>
              <h4 align="justify">
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <br />
          <div className={classes.bar}></div>
          <br />
          <GridContainer className={classes.listItem}>
            <GridItem align="center" xs={12} sm={12} md={8}>
              <p className={classes.itemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </GridItem>
            <br />
            <GridItem align="right" xs={12} sm={12} md={6}>
              <img src={maintenancegImg} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem align="right" xs={12} sm={12} md={6}>
              <p className={classes.itemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </GridItem>
            <GridItem align="center" xs={12} sm={12} md={8}>
              <p className={classes.itemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </GridItem>
          </GridContainer>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
