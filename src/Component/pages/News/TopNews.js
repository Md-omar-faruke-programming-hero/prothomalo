import React from 'react';

const TopNews = ({ t, i }) => {

    return (
        <>
            {i === 0 ? <div className='col-md-8 border-end border-2'>
                <div className='row '>
                    <div className='col-md-6 ps-5 '>
                        <h4 className='' style={{ cursor: "pointer" }}>{t.title}</h4>
                        <p>{t.description.slice(0,140)}...</p>
                        <p><small>
                            {t.time ? `${new Date(t.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                    </div>
                    <div className='col-md-6 mb-3 '>
                        <div className=''>
                            <img className='w-100' src={t.photo} alt="" />
                        </div>
                    </div>
                </div>
            </div> :
                <div className='col-md-4'>
                    <div>
                        <h4 style={{ cursor: "pointer" }}>{t.title}</h4>
                        <p>{t.description.slice(0,140)}... </p>
                        <p><small>
                            {t.time ? `${new Date(t.time)?.toLocaleTimeString('bn-BD', { hour: 'numeric' }).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>
                    </div>
                </div>
            }

        </>
    );
};

export default TopNews;
