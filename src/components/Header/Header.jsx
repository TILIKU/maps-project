import React, {useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles"

const Header = () => {

    const classes = useStyles()
    const [autoComplete, setAutoComplete] = useState(null)
    

    const onLoad = (autoC) => setAutoComplete(autoC)

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5"  className={classes.title}>
                    travel guy
                </Typography>
                <Box display="flex">
                    <Typography variant="h6"  className={classes.title}>
                        explore deez nuts
                    </Typography>
                    <Autocomplete onLoad={onLoad} >
                        <div className={classes.search}>
                            <div    className={classes.seachIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="search..." classes={{ root:classes.inputRoot, input:classes.inputInput }}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header