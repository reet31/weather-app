import React, { useState } from "react";
import png from "../assets/atmospheric-conditions.png";
import { MdLocationPin } from "react-icons/md";
// ...existing code...
const Header = ({onSearch}) => {
const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };
    return (
       <>
             <div className="header-row">
         <img src={png} alt="logo" className="logo"/>
         <h1 className="heading">Weather Dashboard</h1>
       </div>
       <h6 className="tag">~one stop for enviroment info</h6>
       <form onSubmit={handleSubmit} className="form">
        <MdLocationPin/>
 <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
       <button type="submit">Get Weather</button>
       </form>


</>
    );
    }
export default Header;