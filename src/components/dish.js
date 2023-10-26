import React, { Component, Fragment } from "react";
import Button from "@mui/material/Button";

export class Ingredient extends Component {
    render() {
        return (
            <Fragment>
                <h1>Ingredientes</h1>
            </Fragment>
        )
    }
}

class Dish extends Component {

    render(){
        return (
            <div className="dish">
                <h1>Platillo</h1>
                <Ingredient />
                <Button variant="contained">Default</Button>
            </div>
        )
    }
}

export default Dish;