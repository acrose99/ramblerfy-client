import React from 'react';
import "./Team.css";
// import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Team() {
    return (
        <div className="root">
            <Card className="teammate">
                    <CardMedia
                        className="media"
                        image={require("../images/alex2.jpeg")}
                        title="Alex"
                        color="textPrimary"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h3" component="h3">
                            Alex Rose
                        </Typography>
                        <Typography gutterBottom color="textPrimary" variant="h4" component="p">
                            Backend
                        </Typography>
                        <Typography className="content" variant="body2" color="textSecondary" component="p">
                            I'm a sophomore studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the
                            Software
                            Systems Laboratory and the VP of the Don't Panic CS Club. I'm a huge fan of House, Jazz and
                            Soul music!
                        </Typography>
                    </CardContent>
                <CardActions className="github">
                    <Button  variant='outlined' size="large" color="primary" href="https://github.com/acrose99">
                        Github
                    </Button>
                </CardActions>
            </Card>
            <Card className="teammate">
                    <CardMedia
                        className="media"
                        image={require("../images/matt.jpg")}
                        title="Matt"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h3" component="h3">
                            Matt Lofredo
                        </Typography>
                        <Typography gutterBottom color="textPrimary" variant="h4" component="p">
                            Full-Stack/Hosting
                        </Typography>
                        <Typography className="content" variant="body2" color="textSecondary" component="p">
                            I'm an upcoming senior at Loyola University Chicago studying computer science and
                            bioinformatics. I
                            also like music, so why not help create a music app.
                        </Typography>
                    </CardContent>
                <CardActions className="github" >
                    <Button variant='outlined' size="large" color="primary" href="https://github.com/MatthewLoffredo">
                        Github
                    </Button>
                </CardActions>
            </Card>
            <Card className="teammate">
                    <CardMedia
                        className="media"
                        image={require("../images/iqra.jpg")}
                        title="Iqra"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h3" component="h3">
                            Iqra Rehman
                        </Typography>
                        <Typography gutterBottom color="textPrimary" variant="h4" component="p">
                            Front-end
                        </Typography>
                        <Typography className="content" variant="body2" color="textSecondary" component="p">
                            Incoming senior at Loyola double majoring in computer science and IT with a minor in
                            business administration. Loves music/rain/food/art.
                        </Typography>
                    </CardContent>
                <CardActions className="github">
                    <Button variant='outlined' size="large" color="primary" href="https://github.com/Iqra2124">
                        Github
                    </Button>
                </CardActions>
            </Card>
        </div>
    );

    //
    // <div className="header">
    //     <div className={"teammate"}>
    //         <img src={require("../images/matt.jpg")} height="200" width="250"/>
    //         <h3 className="Name">Matt Lofredo</h3>
    //         <h3>Role: Full-Stack</h3>
    //         <p>I'm an upcoming senior at Loyola University Chicago studying computer science and bioinformatics. I
    //             also like music, so why not help create a music app.</p>
    //     </div>
    //     <div className={"teammate"}>
    //         <img src={require("../images/alex.jpg")} height="200" width="250"/>
    //         <h3 className="Name">Alex Rose</h3>
    //         <h3>Role: BackEnd</h3>
    //         <p>I'm a sophomore studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the Software
    //             Systems Laboratory and the VP of the Don't Panic CS Club. I'm a huge fan of House, Jazz and Soul music!</p>
    //     </div>
    //
    //     <div className={"teammate"}>
    //         <img src={require("../images/iqra.jpg")} height="200" width="250"/>
    //         <h3 className="Name">Iqra Rehman</h3>
    //         <h3>Role: FrontEnd</h3>
    //         <p>Incoming senior at Loyola double majoring in computer science and IT with a minor in business administration. Loves music/rain/food/art.</p>
    //     </div>
    // </div>
}
