import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Facebook = FacebookIcon;
const LinkedIn = LinkedInIcon;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    background: "#4d4855",
    background: "linear-gradient(147deg, #4d4855 0%, #000000 74%)",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      padding: theme.spacing(2),
    },
    "& svg": {
      fontSize: "2rem",
    },
  },
  logo: {
    marginRight: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  description: {
    fontSize: "1rem",
    fontWeight: "lighter",
    marginRight: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <div>
        <span className={classes.logo}>SAdik</span>
        <span className={classes.description}>
          We provide top-quality e-pharma products to make your life better
        </span>
      </div>
      <BottomNavigationAction icon={<Facebook />} />
      <BottomNavigationAction icon={<LinkedIn />} />
    </BottomNavigation>
  );
};

export default Footer;
