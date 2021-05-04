import React from "react";
import { Typography, withStyles } from "@material-ui/core";

import styles from "./styles.js";
import Background from "./background.js";

const Header = ({ classes }) => (
    <div className={classes.headerContainer}>
        <Background />
        <Typography variant="h1" className={classes.title}>
            Labforward
        </Typography>
    </div>
);

export default withStyles(styles)(Header);
