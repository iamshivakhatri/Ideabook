import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a  = useContext(noteContext);
    useEffect(() => {
      a.update();
      // eslint-disable-next-line
    }, [])
    
    return (
        <div>
           <h1> I am {a.state.name} and {a.state.age} years old. </h1> 
        </div>
    )
}

export default About
