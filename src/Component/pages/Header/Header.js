import React from 'react';
import logo from "../../../images/prothomalo.png"

const Header = () => {
    return (

        <div className="container-fluid">
            <div className=" mx-auto  text-center my-3">
                <img width='200px' src={logo} alt="" />
            </div>
            <hr />
        </div>

    );
};

export default Header;