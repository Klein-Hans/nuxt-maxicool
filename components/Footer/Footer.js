import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Link from "next/link";

const useStyles = makeStyles(styles);
 
export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
      <GridContainer justify="flex-start">
        <GridItem align="left" xs={6} sm={6} md={6}>
          <h4 className={classes.title}>OUR MISSION</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </GridItem>
        <GridItem align="left" xs={1} sm={1} md={1}></GridItem>
        <GridItem align="left" xs={3} sm={3} md={3}>
          <h4 className={classes.title}>OUR BUSINESS</h4>
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
              ENERGY
            </a> 
          </Link>
          <br />
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
            REFRIGERATION
            </a> 
          </Link>
          <br />
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
            AIR CONDITIONING
            </a> 
          </Link>
          <br />
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
            FOOD & BEVERAGES
            </a> 
          </Link>
        </GridItem>
        <GridItem align="left" xs={2} sm={2} md={2}>
          <h4 className={classes.title}>ABOUT US</h4>
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
            COMPANY
            </a> 
          </Link>
          <br />
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
            NEWS AND EVENTS
            </a> 
          </Link>
          <br />
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
            PROJECTS
            </a> 
          </Link>
          <br />
          <Link href="/products">
            <a color="primary" className={classes.quicklinks}>
            CONTACT
            </a> 
          </Link>
        </GridItem>
        <br/>
        <br/>
        <GridItem className={classes.copyright} align="center" xs={12} sm={12} md={12}>
          <p>© 2020 MAXICOOL INDUSTRIES & CONTRACTING CORP. ALL RIGHTS RESERVE</p>
        </GridItem>
      </GridContainer>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
