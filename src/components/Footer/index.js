import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Battledao from "../../img/battledao.png";
import Consensys from "../../img/consensys.png";
import "./index.scss";

export default function Footer() {
    return (
        <div className="footer-container">
            <Grid container spacing={5} justify="center">
                <Grid item md={3} xs={10} sm={6} lg={2} className="footer-link-container">
                    <Link gutterBottom underline="none" className="footer-link">
                        Contact
                    </Link>
                    <Link gutterBottom underline="none" className="footer-link">
                        New User Guide
                    </Link>
                    <Link gutterBottom underline="none" className="footer-link">
                        About Consensys
                    </Link>
                </Grid>
                <Grid item md={3} xs={10} sm={6} lg={2}>
                    <Box style={{ display: "flex" }}>
                        <CardMedia image={Battledao} className="battledao-img" />
                        <CardMedia image={Consensys} className="consensys-img" />
                    </Box>
                    <Typography gutterBottom color="primary" className="text-center">
                        BattleDAO © 2020 A Consensys Project
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
