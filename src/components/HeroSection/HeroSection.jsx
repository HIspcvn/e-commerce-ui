import React from "react";
import HeroImg from '../../assets/image/heroimg.png';

const HeroSection = () => {
    return (
        <div className="relative flex items-center bg-cover bg-center justify-start text-left h-[85vh] w-full" style={{
            backgroundImage
                : `url(${HeroImg})`
        }}>
            <div className="absolute top-22 right-0 left-0 ">
                <main className="px-10 lg:px-24 z-10">
                    <div className="text-left">
                        <h2 className="text-2xl text-white">Stay Fresh / Wear Better</h2>
                        <p className="mt-3 text-white sm:max-w-xl text-6xl">
                            Style For Everyone, Every Day
                        </p>
                        <p className="mt-3 text-white sm:max-w-xl text-2xl">
                            casual / modern / fun
                        </p>
                        <button className="border rounded mt-20 border-black hover:bg-white hover:text-black hover:border-black text-white bg-black w-44 h-12">
                            Shop now!
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default HeroSection