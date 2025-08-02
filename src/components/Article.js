import React from "react";

function Article(props){
    return (
       <article>
        <h3>{props.title}</h3>
        {props.date? <small>{props.date}</small>:'January 1, 1970'}
        <p>{props.preview}</p>
       </article>

    );
}

export default Article ;