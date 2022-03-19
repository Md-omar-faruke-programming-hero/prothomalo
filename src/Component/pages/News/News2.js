import React from 'react';



const News2 = (props) => {
    const { title, description, time } = props.second
   
    
    // {time ? ` ${time}` : " "}
    return (
        <article className='col-md-4 border-end border-2' style={{ cursor: "pointer" }}>
            <h3>{title}</h3>
            <p>{description.slice(0, 150)}... </p>
            <p><small>
                {time ? `${new Date(time)?.toLocaleTimeString('bn-BD',{hour: 'numeric'}).replace("AM", "").replace("PM", "")} ঘণ্টা আগে ` : " "}</small></p>

        </article>

    );
};

export default News2;