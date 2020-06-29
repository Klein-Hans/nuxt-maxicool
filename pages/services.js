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
import styles from "assets/jss/nextjs-material-kit/pages/servicesPage.js";
import installationImg from "assets/img/installation.jpg";
import maintenancegImg from "assets/img/maintenance.jpg";
import troubleshootImg from "assets/img/troubleshoot.jpg";
import Link from "next/link";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ServicesPage(props) {
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
            <h1 className={classes.title}>WHAT WE DO</h1>
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
          <GridContainer className={classes.listItem} justify="flex-start">
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.itemTitle}>INSTALLATION</h2>
              <p className={classes.itemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/products">
                <a color="primary" className={classes.button}>
                  VIEW MORE 
                </a>
              </Link>
            </GridItem>
            <GridItem align="right" xs={12} sm={12} md={6}>
              <img src={installationImg} alt="..." className={imageClasses} />
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer className={classes.listItem} justify="flex-start">
            <GridItem align="left" xs={12} sm={12} md={6}>
              <img src={maintenancegImg} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.itemTitle}>MAINTENANCE</h2>
              <p className={classes.itemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/products">
                <a color="primary" className={classes.button}>
                  VIEW MORE 
                </a>
              </Link>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer className={classes.listItem} justify="flex-start">
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.itemTitle}>FIX & TROUBLESHOOTING</h2>
              <p className={classes.itemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/products">
                <a color="primary" className={classes.button}>
                  VIEW MORE 
                </a>
              </Link>
            </GridItem>
            <GridItem align="right" xs={12} sm={12} md={6}>
              <img src={troubleshootImg} alt="..." className={imageClasses} />
            </GridItem>
          </GridContainer>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
