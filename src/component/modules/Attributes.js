import React from "react";
import Fast from "@/component/icons/Fast";
import Food from "@/component/icons/Food";
import Choice from "@/component/icons/Choice";
import Clock from "@/component/icons/Clock";

function Attributes() {
    return (
        <div className="mt-[100px]">
            <h3 className="text-base text-color mt-marginG font-bold">Why us?</h3>
            <div className="flex justify-between max-w-[900px]:flex-wrap">
                <div className="w-[150px] rounded-xl text-center p-padD mt-5 shadow">
                    <Fast/>
                    <p className="font-bold mt-5">Fast</p>
                </div>
                <div className="w-[150px] rounded-xl text-center p-padD mt-5 shadow">
                    <Food/>
                    <p className="font-bold mt-5">Best Restaurants</p>
                </div>
                <div className="w-[150px] rounded-xl text-center p-padD mt-5 shadow">
                    <Choice/>
                    <p className="font-bold mt-5">Your Choice</p>
                </div>
                <div className="w-[150px] rounded-xl text-center p-padD mt-5 shadow">
                    <Clock/>
                    <p className="font-bold mt-5">24-7</p>
                </div>
            </div>
        </div>
    )
}

export default Attributes;