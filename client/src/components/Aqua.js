import React, { useEffect, useState } from 'react';
import AquaForm from './AquaForm'

const Aqua = (props) => {
  const [showEdit, setShowEdit] = useState(false);


  

  // any logic

  {/* JSX */}
  return (
    <div style={styles.box}>
      <div>
      Water Type: {props.water}
      </div>
      <div>
      Size: {props.size}
      </div>
      <button onClick={() => setShowEdit(!showEdit)}>{showEdit ? "Close Form" : "Edit Aqua"}</button>
      {showEdit ? <AquaForm {...props} /> : null}
      <button style={{backgroundColor: 'red', color: 'black'}} onClick={() => props.delete(props.id)}>DELETE</button>
{/* aquaform goes here */}
    </div>
  )
}

export default Aqua;

// styling

const styles = {
  box: {
    border: 'solid 2px darkblue',
    padding: '1em',
    margin: '1em'
  }
}