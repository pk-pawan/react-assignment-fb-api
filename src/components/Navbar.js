import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return <div className="fb-nav">
            <Link to="/facebook-albums/profile" >Profile</Link>
            <Link to="/facebook-albums/albums" >Albums</Link>
            <Link to="/">Logout</Link>
    </div>
}

export default Navbar;