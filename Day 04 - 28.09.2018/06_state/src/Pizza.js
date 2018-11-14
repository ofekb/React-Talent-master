import React from 'react';


//function style comonent

/*
can get one parameter - that is injected by react
(will get all the attribute that we added to the tag)
*/

const pizza = ( p ) => {

    //onClick - DONT ADD () !!!
    return (
        <div>
            <p>Pizza price: {p.price} </p>
            <button onClick={()=>{p.discount(p.num,0.5);}}>get discount</button>
            <hr/>
        </div>
    )
};

export default pizza;