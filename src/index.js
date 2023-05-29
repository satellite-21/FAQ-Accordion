// How you will build it?
// You will learn how to toggle state to make sure that each accordion 
// opens and closes after each button press. 
// You will also learn simple conditionals such as the and (&&) operator 
// that will only show the content of the accordion when the accordion state says it is open.

// Finally, we will create an entire FAQ (frequently asked questions) 
// section by displaying multiple accordion components. To do so, 
// we will learn how to pass each accordion's 
// data down into the component using props.


import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const ToggleApp = () => {


    const [btnstate, setBtn] = useState(1);


    const btnPress = () => {
        // we will check if the current state is 0 or 1 and will toggle
        setBtn((currSt) => currSt===0 ? 1: 0);
    };


    // repeater use : common part repeat : map is being used 


    return (
<div>

<h1>Project 2: FAQ/Accordion</h1>
    <div className='infobox'>
        <p>This section will display multiple accordion components.
        <button onClick={btnPress}>toggle</button></p>

        {/* check the button state here and if it is 0 show info and if it is 1 take back the info */}
        {btnstate ? <p></p> : <p>hello</p>}

</div>

</div>
    );

};

ReactDOM.render(<ToggleApp />, document.getElementById("root"));
