import { container, title } from "assets/jss/nextjs-material-kit.js";
import { hexToRGBAlpha, primaryColor } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const productsPageStyle = {
  listItem: {
    paddingTop: "4em",
    paddingBottom: "4em",
  },
  ...imagesStyle,  
  imgSize: {
    width: "30em"
  },
  bar: {
    border: "3px solid #0097a7",
    width: "10em",
    margin: "4em auto",
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "0",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "4em",
  },
  subtitle: {
    fontSize: "1rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    color: "#DDD",
  },
  main: {
    // background: "#FFFFFF",
    backgroundImage: "linear-gradient(130deg, #143542 20%, #D6BEB9)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  itemTitle: {
    ...title,
    marginBottom: "1rem",
    marginTop: "0",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
    color: "#FFF",
    fontSize: "2.5em",
  },
  itemDescription: {
    color: "#CCC",
    textAlign: "left",
    fontSize: "1em",
  },
  button: {
    border: "1px solid #0097a7",
    backgroundColor: "transparent",
    float: "left",
    color: "#FFFFFF",
    margin: ".3125rem 1px",
    padding: "12px 30px",
    position: "relative",
    fontSize: "12px",
    minWidth: "auto",
    minHeight: "auto",
    textAlign: "center",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    fontWeight: "400",
    lineHeight: "1.42857143",
    whiteSpace: "nowrap",
    willChange: "box-shadow, transform",
    touchAction:"manipulation",
    borderRadius: "3px",
    letterSpacing: "0",
    textTransform: "uppercase",
    verticalAlign: "middle",
    "&:hover,&:focus": {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      boxShadow: `0 14px 26px -12px ${hexToRGBAlpha(
        primaryColor,
        0.42
      )}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${hexToRGBAlpha(
        primaryColor,
        0.2
      )}`
    }
  },
};

export default productsPageStyle;
