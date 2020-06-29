import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/serviceStyle.js";
import serviceImg from "assets/img/featured-service.png";
import Link from "next/link"; 

const useStyles = makeStyles(styles);

export default function ServiceSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgCard,
    classes.imgRaised,
    classes.imgSize
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="flex-start">
        <GridItem cs={12} sm={12} md={12}>
          <h2 className={classes.title}>WHAT WE DO</h2>
          <div className={classes.titleBar}></div>
        </GridItem>
        <GridItem cs={12} sm={12} md={5}>
          <p className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </p>
          <Link href="/services">
            <a color="primary" className={classes.button}>
              VIEW MORE 
            </a>
          </Link>
        </GridItem>
        <GridItem align="right" cs={12} sm={12} md={7}>
          <img src={serviceImg} alt="..." className={imageClasses} />
        </GridItem>
          {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form> */}
      </GridContainer>
    </div>
  );
}
