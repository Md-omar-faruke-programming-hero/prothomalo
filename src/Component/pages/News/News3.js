import React from 'react';

const News3 = ({ op, i }) => {
    return (
        <>
            {
                i === 0 ? <div className='border-bottom border-2 mt-3'>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='mb-4' >
                                <img width="150px" className='' src={op.photo} alt="" />
                            </div>
                            <p><small>
                                {op.time ? `${new Date(op.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                        </div>
                        <div className='col-md-6 text-end '>
                            <p>{op.title}</p>
                        </div>
                    </div>
                </div> : <div className=' mt-3'>
                    <div className='row'>
                        <div className='col-md-6 '>
                            <p>{op.title}</p>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='mb-4' >
                                <img width="150px" src={op.photo} alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            }
        </>


    );
};

export default News3;