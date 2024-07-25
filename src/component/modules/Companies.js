import React from "react";
import Apple from "@/component/icons/Apple";
import SpaceX from "@/component/icons/SpaceX";
import Binance from "@/component/icons/Binance";
import Tesla from "@/component/icons/Tesla";

function Companies() {
    return (
        <div className="flex justify-around items-center">
            <Apple/>
            <SpaceX/>
            <Binance/>
            <Tesla/>
        </div>
    )
}

export default Companies;