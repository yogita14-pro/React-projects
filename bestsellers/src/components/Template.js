import React from "react";

function Template(props){
    return(
        <div className="card">
            <section>
            <a href={props.link}><img src={props.imgsr}></img></a>
            </section>
            <section>
                <h1 className="bname">{props.name}</h1>
                <h1 className="aname">{props.author}</h1>
                <h3>Rating: {props.rate}</h3>
                <h3>Price: {props.price}</h3>
            </section>
        </div>
    )
}

export default Template;