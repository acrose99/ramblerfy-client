import React from "react";
import './Team.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button
} from 'reactstrap';

export default function Home() {
    return (
        // <div className="card">
        //     <Card border="primary" style={{width: '18rem'}} height="200">
        //         <CardImg variant="top" src={require("../images/alex.jpg")}/>
        //         <CardBody>
        //             <CardTitle>Alex Rose</CardTitle>
        //             <CardSubtitle>Role: Backend</CardSubtitle>
        //             <CardSubtitle>
        //                 I'm a sophomore studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the Software
        //                 Systems Laboratory and the VP of the Don't Panic CS Club. I'm a huge fan of House, Jazz and Soul
        //                 music.
        //             </CardSubtitle>
        //             <CardLink href="http://dontpanic.cs.luc.edu/exec">Don't Panic</CardLink>
        //             <CardLink href="https://ssl.cs.luc.edu/team.html">SSL</CardLink>
        //         </CardBody>
        //     </Card>
        // </div>
        //
        <div className="header">
            <div className={"teammate"}>
                <img src={require("../images/matt.jpg")} height="200" width="250"/>
                <h3 className="Name">Matt Lofredo</h3>
                <h3>Role: Full-Stack</h3>
                <p>I'm an upcoming senior at Loyola University Chicago studying computer science and bioinformatics. I
                    also like music, so why not help create a music app.</p>
            </div>
            <div className={"teammate"}>
                <img src={require("../images/alex.jpg")} height="200" width="250"/>
                <h3 className="Name">Alex Rose</h3>
                <h3>Role: BackEnd</h3>
                <p>I'm a sophomore studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the Software
                    Systems Laboratory and the VP of the Don't Panic CS Club. I'm a huge fan of House, Jazz and Soul music!</p>
            </div>

            <div className={"teammate"}>
                <img src={require("../images/IMG_3036.jpg")} height="200" width="250"/>
                <h3 className="Name">Iqra Rehman</h3>
                <h3>Role: FrontEnd</h3>
                <p>Incoming senior at Loyola double majoring in computer science and IT with a minor in business administration. Loves music/rain/food/art.</p>
            </div>
        </div>
    );
}
