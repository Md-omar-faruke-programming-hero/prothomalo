import React from 'react';
import pic from "../../../images/dem.png"
const Footer = () => {
    return (
        <div>
            <div className='w-75 mx-auto'>
                <img className='w-100' src={pic} alt="" />
            </div>
            <hr />
            <div className='text-center my-4'>
                <small>  স্বত্ব © ২০২২ প্রথম আলো
                    সম্পাদক ও প্রকাশক: মতিউর রহমান</small>
            </div>
        </div>
    );
};

export default Footer;