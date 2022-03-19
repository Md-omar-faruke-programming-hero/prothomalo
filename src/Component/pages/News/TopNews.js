import React from 'react';
import "../News/style.css"

const TopNews = ({ top, index }) => {

    return (
        <>
            {index === 0 ? <section className='col-md-8 border-end border-2'>
                <div className='row '>
                    <article className='col-md-6 ps-5 '>
                        <a href="#"><h4 className='' style={{ cursor: "pointer" }}>{top.title}</h4></a>
                        <a href="#"><p>{top.description.slice(0,140)}...</p></a>
                        <p><small>
                            {top.time ? `${new Date(top.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                    </article>
                    <article className='col-md-6 mb-3 '>
                        <div className=''>
                           <a href="#"> <img className='w-100' src={top.photo} alt="" /></a>
                        </div>
                    </article>
                </div>
            </section> :
                <section className='col-md-4'>
                    <article>
                        <a href="#"><h4 style={{ cursor: "pointer" }}>{top.title}</h4></a>
                       <a href="#"> <p>{top.description.slice(0,140)}... </p></a>
                        <p><small>
                            {top.time ? `${new Date(top.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                    </article>
                </section>
            }

        </>
    );
};

export default TopNews;
