import React from "react";
const name = prompt('enter Your name in small letter');

 function Header(){
   
    if (isNaN(name))
    return <>
        <h1>Welcome {name}!</h1>
        
    </>
    
    else return 
    <>
    <h2>enter a number bro</h2>
    <button>Click to enter Your name</button>
    </>
}
export default Header;