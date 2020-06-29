import { title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";
import { hexToRGBAlpha, primaryColor } from "assets/jss/nextjs-material-kit.js";

const productStyle = {
  ...imagesStyle,
  imgSize: {
    width: "30em"
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
    color: "#FFF",
    fontSize: "3em",
  },
  titleBar: {
    border: "3px solid #0097a7",
    width: "10em",
    marginBottom: "50px",
  },
  description: {
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

export default productStyle;
