import React from "react";
export function Header(){
    const {name} = prompt('enter Your name in small letter');
    if (!isNaN(name))
    return <>
        <h1>Welcome {name}!</h1>
        
    </>
    else return 
    <>
    <h2>enter a number bro</h2>
    </>
}
