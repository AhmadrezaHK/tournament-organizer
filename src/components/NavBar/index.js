import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { useMqList } from "hooks";
import Battledao from "../../img/battledao.png";
import "./index.scss";

export default function ButtonAppBar() {
    const mq = useMqList();
    const [isDrawerOpen, toggleDrawer] = useState(false);

    return (
        <>
            <AppBar position="static" style={{ background: "#0C061E" }}>
                <Toolbar className="toolbar">
                    {["xs", "sm"].includes(mq) ? (
                        <>
                            <CardMedia image={Battledao} className="drawer-logo" />
                            <IconButton onClick={() => toggleDrawer(true)} edge="end" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="right" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
                                <List>
                                    {["Explore Tournaments", "New User Guide", "Sign Up", "Sign In"].map((text) => (
                                        <>
                                            <ListItem className="drawer-item" button key={text}>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                            <Divider />
                                        </>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <Box style={{ display: "flex" }}>
                                <Box mr="2rem">
                                    <CardMedia image={Battledao} className="drawer-logo" />
                                </Box>
                                <Button color="inherit">Explore Tournaments</Button>
                                <Button color="inherit">New User Guide</Button>
                            </Box>
                            <Box>
                                <Button color="inherit">Sign Up</Button>
                                <Button color="inherit">Sign In</Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}
