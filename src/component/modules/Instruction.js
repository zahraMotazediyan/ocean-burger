import React from "react";

function Instruction() {
    return (
        <div className="mt-[100px]">
            <h3 className="text-base text-color m-marginG font-bold">How to Order?</h3>
            <ul className="p-0">
                <li className="container leading-[30px] text-sm font-medium">Sign in (or create an account) and set
                    your delivery address
                </li>
                <li className="leading-[30px] text-sm font-medium list-none">Choose the restaurant you want to order
                    from.
                </li>
                <li className="leading-[30px] text-sm font-medium list-none">Select your items and tap “Add to Cart”.
                </li>
                <li className="leading-[30px] text-sm font-medium list-none">To place your order, select “View cart” or
                    “Checkout”.
                </li>
                <li className="leading-[30px] text-sm font-medium list-none">Review your order and tap “Place
                    Order”...
                </li>
                <li className="leading-[30px] text-sm font-medium list-none">Track your order progress.</li>
            </ul>
        </div>
    )
}

export default Instruction;