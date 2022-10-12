import React from "react";
import './style.css';
const WorkCard = props => {
 console.log(props)
  return (
    <div className="work">
      <p  onClick={() => props.toggleItem(props.data.id)}
    className={`work ${props.data.done ? " done" : "" }`}>{props.data.name}</p>
      <button className="btnClear" onClick={() => props.delete(props.data.id)}>Clear</button>
     
    </div>
    
     
  );
};

export default WorkCard;
