import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#00e676"}}>Sent! Your ban appeal has been submitted to Team Snaily!</h1>
                <h4>Please allow some time for them to review your appeal. Abusing of this system will result in a permanent ban.</h4>
            </Grid>
        );
    }
}

export default Success;
