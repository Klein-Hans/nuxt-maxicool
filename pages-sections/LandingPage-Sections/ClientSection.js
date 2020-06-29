import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/clientStyle.js";
import iconTestimonial from "assets/img/icon-testimonial.png";
import magnoliaLogo from "assets/img/magnolia-logo-white-1.png";
import purefoodsLogo from "assets/img/purefoods-logo-white.png";
import selectaLogo from "assets/img/selecta-logo-png-white-.png";
import gentunaLogo from "assets/img/gentuna-logo-white.png";

const useStyles = makeStyles(styles);

export default function ClientSection() {
  const classes = useStyles();
  const iconTestimonialClasses = classNames(
    classes.imgIconStyle,
  );
  const logoClasses = classNames(
    classes.imgLogoStyle,
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>OUR CLIENTS</h2>
          <div className={classes.titleBar}></div>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={7} md={7}>
          <div className={classes.qoute}>
            <img src={iconTestimonial} alt="..." className={iconTestimonialClasses} />
            <br />
            <br />
            <p>[Company] offers powerful and suite of tools that every industrial business
              must have. We're gratefulto your continuous services.
            </p>
            <p>
            - John Smith | Magnolia Lead Manager
            </p>
          </div>
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer alignItems="stretch" className={classes.listOfClients}>
        <GridItem xs={3} sm={3} md={3}>
          <img src={magnoliaLogo} alt="..." className={logoClasses} />
        </GridItem>
        <GridItem xs={3} sm={3} md={3}>
          <img src={gentunaLogo} alt="..." className={logoClasses} />
        </GridItem>
        <GridItem xs={3} sm={3} md={3}>
          <img src={purefoodsLogo} alt="..." className={logoClasses} />
        </GridItem>
        <GridItem xs={3} sm={3} md={3}>
          <img src={selectaLogo} alt="..." className={logoClasses} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
