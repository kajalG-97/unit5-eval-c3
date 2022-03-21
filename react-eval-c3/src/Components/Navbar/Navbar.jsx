import { Link, Navigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
         <button onClick={() =>{
          Navigate ("/section/Mystery");
         }}>Mystery</button>
         <button onClick={() =>{
           Navigate("/section/Technology");
         }}>Technology</button>
         <button onClick={() =>{
           Navigate("/section/Mythology");
         }}>Mythology</button>
         <button onClick={() =>{
           Navigate("/section/history");
         }}></button>
         <button onClick={() =>{
           Navigate("/");
         }}></button>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
