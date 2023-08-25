import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#000000"}}>Done! Your ban appeal has been submitted to Team Snaily!</h1>
                <h4>It may take some time (but no longer than 1 month) to review your ban appeal so please be patient. Abuse of this system will result in punishment. If you are still unable to join our Discord Community 1 month after your appeal, your appeal has been denied.</h4>
            </Grid>
        );
    }
}

export default Success;
