//function style comonent
//is like a render function in a class style component
//function style component can get one parameter that is like the "this.props" in class style comonent


/*
can get one parameter - that is injected by react
(will get all the attribute that we added to the tag)
*/

/*
props.children - is a built in keyword to access the 
content between the opening tag and the closing tag
*/

import React from 'react';  //this enables to use JSX

function pizza(p){
    return (
        <div>
            <p>Pizza price is: {p.price} </p>
            <p>Num of slices: {p.slices} </p>
            <p>children:{p.children}</p>
            <hr />
        </div>
    )
};

export default pizza;