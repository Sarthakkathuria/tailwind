import React from 'react'
import Image from "next/image";

function Banner() {
    return (
        // for relative we have to first add width and height to fix height it is in [] bracket
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src = "https://links.papareact.com/0fm"
            layout="fill"
            objectFit="cover"
            />
            {/* for position to be fixed we have to make the div absolute so it will stick to perticular position 
            for text to be fixed in container above container should be relative otherwise we are relative to page and content will fly
            to end of page  */}
            <div className="absolute top-1/2 w-full text-center">
                <p className = "text-sm sm:text-lg">Text is present</p>
                {/* main advantage of tailwind over bootstrap is all the tags have default nne styling so we dont have to configure h1
                button h2 etc.*/}
                {/* margin is outside the component while padding is inside the component */}
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md
                rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"> I am flexible</button>
            </div>
        </div>
    )
}

export default Banner
