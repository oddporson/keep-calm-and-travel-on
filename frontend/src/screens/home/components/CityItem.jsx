import React from 'react';
import {Link} from 'react-router-dom'


const CityItem = (props) => {
  console.log('budget',props.value)

  let budget = !isNaN(props.value)? props.value: 'budget_not_given'
  if (!isNaN(budget)){
    return (
      <div>
        <Link to={`/main/${props.city}/${budget}`}>{props.city} [{props.numDays}days]</Link>
      </div>
    );
  }
  return (
    <div>
      <Link to={`/main/${props.city}/${budget}`}>{props.city}</Link>
    </div>
  );
};

export default CityItem;

// onClick={(event)=> props.setCity(props.city)}