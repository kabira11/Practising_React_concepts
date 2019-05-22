import React from 'react';

// function first(){
//     return <h1>Hello Trayambak</h1>
// }

// Using ARROW function

const first = (props) => {
    console.log(props);
    return (
        //return only one component
        <div>
            <h1>
                Hello {props.name} {props.sirName}
            </h1>
                {props.children}
        </div>
    )
}

export default first;