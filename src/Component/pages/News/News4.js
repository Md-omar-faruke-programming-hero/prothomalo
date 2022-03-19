import React from 'react';

const News4 = (props) => {


    return (

        <div className='col-md-4 border-top border-2 p-3' style={{ cursor: "pointer" }}>
            <div className='row border-end border-2'>
                <div className='col-md-6'>
                    <div className=' '>
                        <img width="125px" src={props?.omar?.photo} alt="" />

                    </div>
                    <p className='mt-3'><small>
                        {props?.omar?.time ? `${new Date(props?.omar?.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                </div>
                <dir className='col-md-6'>
                    <p>{props?.omar?.suptitle && <span><span className='text-danger'>{props?.omar?.suptitle}</span>/</span>}{props?.omar?.title} </p>
                </dir>
            </div>
        </div>

    );
};

export default News4;