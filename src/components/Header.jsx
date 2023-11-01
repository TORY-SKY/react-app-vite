import React from "react";
const name = prompt('enter Your name in small letter');
const Savename = name;
 function Header(){
   
    if (Savename)
    return <>
        <h1>Welcome {Savename}!</h1>
        
    </>
    
         return 
    <>
    <h2>enter a number bro</h2>
    <button>Click to enter Your name please </button>
    </>
}
export default Header;