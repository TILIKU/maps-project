import React, {useState, useEffect, createRef,useRef} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from "@material-ui/core";
import useStyles from "./styles"

import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({places, childClicked, isLoading}) => {
    const classes = useStyles()
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => (elRefs[i] || createRef()) && console.log(_));

        setElRefs(refs)
    }, [places])
    useEffect(() => {console.log(elRefs.current) })

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, hotels and attractions around you</Typography>
            
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
               <> 
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>above 3.0</MenuItem>
                    <MenuItem value={4}>above 4.0</MenuItem>
                    <MenuItem value={4.5}>above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails 
                        
                            place={place}
                            selected={Number(childClicked) === i}
                            refProp={elRefs}

                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </div>
    )
}

export default List