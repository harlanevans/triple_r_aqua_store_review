import React, { useState, useEffect } from 'react';
import Aqua from './Aqua';

const AquaForm = (props) => {
  const [water, setWater] = useState()
  const [size, setSize] = useState()

  useEffect(() => {
    if (props.id) {
      setWater(props.water)
      setSize(props.size)
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // edit
    if (props.id) {
      props.editAqua(props.id, {water, size})
    } else {
       props.addAqua({water, size})
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* water */}
      <input
        title='Water'
        name='water'
        value={water}
        onChange={(e) => setWater(e.target.value)}
        placeholder='Water'
        />
      {/* size */}
      <input
        title='Size'
        name='size'
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder='Size'
        
      />
      <button type='submit'>Create Aqua</button>

    </form>
  )
}

export default AquaForm