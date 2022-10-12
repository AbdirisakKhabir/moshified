import React from "react";
import WorkCard from "./WorkCard";
import './style.css';

const WorkList = props => {
  console.log(props)

  // Waxa ay prop-ka rabto sii, sida "items" iyo "toggleItem" oo function ah. 

  return (
    <div className="workList">
      
      {props.newItem.map(item => (
         
          
       <WorkCard key={item.id} data={item} toggleItem={props.toggleItem} delete={props.delete}/>
      
        
       
      
      ))}
      
    </div>
  );
};

export default WorkList;
