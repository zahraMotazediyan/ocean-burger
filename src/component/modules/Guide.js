import React from "react";
import Link from "next/link";

function Guide() {
    return (
        <div className="flex justify-between mt-[100px]">
            <Link className="shadow p-paD rounded-xl cursor-pointer max-w-[900px]:p-padLink"
                  href="/menu">Menu</Link>
            <Link className="shadow p-paD rounded-xl cursor-pointer max-w-[900px]:p-padLink"
                  href="/categories">Categories</Link>
            <Link className="shadow p-paD rounded-xl cursor-pointer max-w-[900px]:p-padLink"
                  href="/">Discount</Link>
        </div>
    )
}

export default Guide;