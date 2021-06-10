import React from "react";

function Card(props) {
  return (
    <div className="card" style={style}>
      <img src={props.cardimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.description2}</p>
        <a href={props.projectlink} target="_blank" rel="noreferrer" className="btn border-dark" style={{marginRight: '1rem'}}>
          Demo
        </a>
        <a href={props.githublink} target="_blank" rel="noreferrer" className="btn border-dark">
          Github Repo
        </a>
      </div>
    </div>
  );
}

var style = {
  
};

export default Card;
