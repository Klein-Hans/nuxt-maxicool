import { cardTitle, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const teamStyle = {
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
  ...imagesStyle,
  imgLogoStyle: {
    width: "8em",
  },
  imgIconStyle: {
    width: "2em",
    backgroundColor: "transparent"
  },
  listOfClients: {
    marginTop: "6em"
  },
  titleBar: {
    border: "3px solid #0097a7",
    width: "10em",
    marginBottom: "50px",
  },
  description: {
    color: "#CCC",
    textAlign: "left"
  },
  qoute: {
    border: "1px solid #FFF",
    borderRadius: "6px",
    padding: "18px",
    backgroundColor: "transparent",
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
