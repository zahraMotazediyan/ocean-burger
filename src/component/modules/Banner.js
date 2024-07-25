import React from "react";
import Link from "next/link";
import Image from "next/image";
import Img from "../../assets/images/sources/banner.png";

function Banner() {
    return (
        <div className="flex max-w-[600px]:flex-col-reverse	">
            <div className="mt-2.5 flex flex-col max-w-[600px]:mt-5 max-w-[900px]:mt-2.5">
                <h2 className="border-b-solid border-b-4 w-fit m-margin border-b-color font-bold ">Ocean Burger</h2>
                <p className="font-medium m-marginT">Food Delivery and Takeout!</p>
                <span className="text-colorSpan text-justify">
                    Ocean Burger  is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </span>
                <Link className="bg-color text-white p-pad w-fit mt-7 rounded" href="/menu">See All</Link>
            </div>
            <div className="max-w-[600px]:text-center">
                <Image src={Img} alt="img" className="w-[450px] max-w-[600px]:w-[90%] max-w-[900px]:w-[350px]"/>
            </div>
        </div>
    );
}


export default Banner;