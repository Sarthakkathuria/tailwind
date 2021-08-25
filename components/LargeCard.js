import React from 'react';
import image from 'next/image';

function LargeCard({img , title, description ,buttonText}) {
    return (
        <div className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                {/* <h1>fsdf</h1> */}
                <img src= {img} className="2xl"/>
                {/* <image src={img} layout="fill" objectFit="cover" /> */}
                
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>{description}</p>
                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg">{buttonText}</button>
            </div>   
        </div>
    )
}

export default LargeCard
