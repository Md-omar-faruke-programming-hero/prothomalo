import React from 'react';

const News3 = ({ fifth, index }) => {
    return (
        <>
            {
                index === 0 ? <section className='border-bottom border-2 mt-3'>
                    <article className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='mb-4' >
                               <a href="#"> <img width="150px" className='' src={fifth.photo} alt="" /></a>
                            </div>
                            <p><small>
                                {fifth.time ? `${new Date(fifth.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                        </div>
                        <div className='col-md-6 text-end '>
                            <a href="#"><p>{fifth.title}</p></a>
                        </div>
                    </article>
                </section> : <section className=' mt-3'>
                    <article className='row'>
                        <div className='col-md-6 '>
                            <a href="#"><p>{fifth.title}</p></a>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='mb-4' >
                                <a href="#"><img width="150px" src={fifth.photo} alt="" /></a>
                            </div>

                        </div>

                    </article>
                </section>
            }
        </>


    );
};

export default News3;