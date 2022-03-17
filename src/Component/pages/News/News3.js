import React from 'react';
import picc from "../../../images/deo.png"
const News3 = () => {
    return (
        <div className='col-md-3 '>
            <div className='border-bottom border-2 mt-3 ' style={{ height: "35%" }}>
                <div className='col-md-1 ' >
                    <img width="250px" height="300px" src={picc} alt="" />
                </div>
            </div>
            <div className='border-bottom border-2 mt-3'>
                <div className='col-md-1 ' >
                    <img width="250px" src="https://images.prothomalo.com/prothomalo-bangla%2F2021-04%2Ff234e977-9b52-464e-9296-26962286cec7%2FUntitled_8.png" alt="" />
                </div>
                <p>স্মৃতিতে মিষ্টি মেয়ে...</p>
            </div>
            <div className='border-bottom border-2 mt-3'>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <div className='mb-4' >
                            <img width="150px" src="https://images.prothomalo.com/prothomalo-bangla%2F2021-04%2F32c2e4aa-cad0-4561-8d95-4bf605197234%2Fworld_bank.jpg" alt="" />
                        </div>
                        <small className=''>১0 ঘণ্টা আগে</small>
                    </div>
                    <div className='col-md-6 '>
                        <p>পিপিই উৎপাদনে অনুদান দিচ্ছে বিশ্বব্যাংক, আজ থেকেই আবেদন</p>
                    </div>
                </div>
            </div>
            <div className=' mt-3'>
                <div className='row'>
                    <div className='col-md-6 '>
                        <p>পিপিই উৎপাদনে অনুদান দিচ্ছে বিশ্বব্যাংক, আজ থেকেই আবেদন</p>
                    </div>
                    <div className='col-md-6 mb-3'>
                        <div className='mb-4' >
                            <img width="150px" src="https://images.prothomalo.com/prothomalo-bangla%2F2021-04%2F32c2e4aa-cad0-4561-8d95-4bf605197234%2Fworld_bank.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News3;