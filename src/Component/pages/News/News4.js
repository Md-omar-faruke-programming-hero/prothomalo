import React from 'react';

const News4 = (props) => {


    return (

        <section className='col-md-4 border-top border-2 p-3' style={{ cursor: "pointer" }}>
            <article className='row border-end border-2'>
                <div className='col-md-6'>
                    <div className=' '>
                        <img width="125px" src={props?.third?.photo} alt="" />

                    </div>
                    <p className='mt-3'><small>
                        {props?.third?.time ? `${new Date(props?.third?.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                </div>
                <dir className='col-md-6'>
                    <p>{props?.third?.suptitle && <span><span className='text-danger'>{props?.third?.suptitle}</span>/</span>}{props?.third?.title} </p>
                </dir>
            </article>
        </section>

    );
};

export default News4;