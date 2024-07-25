import React from "react";
import Banner from "@/component/modules/Banner";
import Attributes from "@/component/modules/Attributes";
import Definition from "@/component/modules/Definition";
import Companies from "@/component/modules/Companies";
import Instruction from "@/component/modules/Instruction";
import Guide from "@/component/modules/Guide";
import Restrictions from "@/component/modules/Restrictions";

function HomePage() {
    return (
        <div className="categories m-auto max-w-[900px]:p-5 max-w-[600px]:p-2.5">
            <Banner/>
            <Attributes/>
            <Definition/>
            <Companies/>
            <Instruction/>
            <Guide/>
            <Restrictions/>
        </div>
    )
}

export default HomePage;