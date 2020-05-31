import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleChange = event => {setSearchTerm(event.target.value);
    };


    return (
        <div className='navbar'>
            <a href="#">Home</a>
            <a id="admin" href="#">Admin</a>
            <input
                type="text"
                placeholder="Search.."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default Navbar;