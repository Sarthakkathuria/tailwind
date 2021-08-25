import React from 'react';
import Image from "next/image";
function MediumCard({img,title}) {
    // console.log(img);
    return (
        // we are using div because we are using layout fill and it will take up the whole screen
        <div className="cursor-pointer hover:scale-105 
         transform transition duration-300 ease-out ">
            <div className ="relative h-18 w-18">
                <img src = {img} className="rounded-lg" />
                {/* <Image src={img} layout="fill" className="rounded-lg" /> */}
            </div>
            <h3 className ="text-2xl mt-3">{title}</h3>
        </div>

    )
}

export default MediumCard
