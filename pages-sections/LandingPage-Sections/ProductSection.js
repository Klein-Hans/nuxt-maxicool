import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import serviceImg from "assets/img/featured-product.jpg";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgCard,
    classes.imgRaised,
    classes.imgSize
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>MARKETS WE SERVE</h2>
          <div className={classes.titleBar}></div>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <p className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </p>
          <Link href="/products">
            <a color="primary" className={classes.button}>
              VIEW MORE 
            </a>
          </Link>
        </GridItem>
        <GridItem align="right" xs={12} sm={12} md={7}>
          <img src={serviceImg} alt="..." className={imageClasses} />
        </GridItem>
      </GridContainer>
      {/* <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoAreax`
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer> */}
    </div>
  );
}
