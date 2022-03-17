import React from 'react';

const TopNews = () => {
    return (
        <>
            <div className='row border-end border-2'>
                <div className='col-md-8 border-end border-2'>
                    <div className='row '>
                        <div className='col-md-6 ps-5 '>

                            <h4 className='' style={{ cursor: "pointer" }}>ঢাকায় মামুনুলের বিরুদ্ধে ১৭ মামলা</h4>
                            <p>হেফাজতে ইসলামের যুগ্ম মহাসচিব মামুনুল হকের বিরুদ্ধে কেবল রাজধানীতেই অন্তত ১৭টি মামলা রয়েছে।</p>
                            <p><small>১ ঘণ্টা আগে</small></p>

                        </div>
                        <div className='col-md-6 '>
                            <div className=''>
                                <img className='w-100' src="https://images.prothomalo.com/prothomalo-bangla%2F2021-04%2Fd7e6efd7-c234-4113-8fca-5a684da3532d%2FMamunul.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div>
                        <h4 style={{ cursor: "pointer" }}>অজ্ঞাত স্থানে রেখে বিশ্ববিদ্যালয়ছাত্রকে নির্যাতনের অভিযোগ, সারা শরীরে ক্ষত</h4>
                        <p>হাতে, কাঁধের নিচে, বুকে ধারালো অস্ত্রের পোঁচ। হাঁ হয়ে থাকা ক্ষততে সেলাই পড়েছে সদ্য।... </p>
                        <p><small>৪ ঘণ্টা আগে</small></p>
                    </div>
                </div>
            </div>
            <hr className='ps-5' />
        </>
    );
};

export default TopNews;