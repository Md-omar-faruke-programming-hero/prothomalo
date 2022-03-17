import React from 'react';
import logo from "../../../images/prothomalo.png"

const Header = () => {
    return (

        <div class="container-fluid">
            <div class=" mx-auto  text-center my-3">
                <img width='200px' src={logo} alt="" />
            </div>
            <hr />
        </div>

    );
};

export default Header;