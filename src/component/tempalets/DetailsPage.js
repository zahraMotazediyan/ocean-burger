import Location from "@/component/icons/Location";
import Dollar from "@/component/icons/Dollar";
import Image from "next/image";
import Images from "../../assets/images/imgLoader";

function DetailsPage(props) {
    const {id, name, discount, introduction, details, ingredients, recipe, price} = props;
    return (
        <div className="categories m-auto max-w-[900px]:p-5 max-w-[600px]:p-2.5">
            <h2 className="subBorder w-fit mb-[50px] text-3xl ">Details</h2>
            <div>
                <div className="flex max-w-[600px]:flex-col ">
                    <Image
                        src={Images[id]} alt={"img"}
                        className="w-[300px] rounded-lg max-w-[600px]:w-full max-w-[600px]:mb-5"
                    />
                    <div className="ml-[30px] max-w-[600px]:m-0 ">
                        <h3 className="text-2xl	text-color">{name}</h3>
                        <span className="flex items-center">
                    <Location className="text-colorSpan m-marginLoc"/>
                            {details[0].Cuisine}
                        </span>
                        <span className="flex">
                    <Dollar/>
                            {discount ? (price * (100 - discount)) / 100 : price}$
                       </span>
                        {
                            discount ? (
                                <span className="bg-colorD text-white p-padFooter flex justify-center rounded mt-5">
                        {discount}$ OFF</span>) : null
                        }
                    </div>
                </div>
                <div className="m-marginInt leading-6 text-justify">
                    <p>{introduction}</p>
                </div>
                <div className="mb-14">
                    <h4 className="m-marginG text-color text-2xl">Details</h4>
                    <ul className="list-none">
                        {
                            details.map((detail, index) => (<li className="container flex items-center m-marginLi"
                                                                key={index}>
                                    <p className="text-base	font-bold m-marginDe">{Object.keys(detail)[0]}: </p>
                                    <span className="text-colorSpan">{Object.values(detail)[0]}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mb-14">
                    <h4 className="m-marginG text-color text-2xl">Ingredients</h4>
                    <ul className="list-none">
                        {
                            ingredients.map((ingredient, index) => (
                                <li className="container flex items-center m-marginLi" key={index}>
                                    <p className="text-base	font-bold m-marginDe">{ingredient}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mb-[100px]">
                    <h4 className="m-marginG text-color text-2xl">Recipe</h4>
                    {
                        recipe.map((item, index) => (
                            <div className={`${index % 2 ? "odd" : "even"} flex items-center p-p text-justify`}
                                 key={index}>
                                <span className="m-marg text-3xl">{index + 1}</span>
                                <p>{item}</p>
                            </div>
                        ))
                    }
                </div>
                <button
                    className="w-full border-0 bg-color text-white p-3.5 text-2xl rounded-lg cursor-pointer	mb-[100px]">
                    Add to card
                </button>
            </div>
        </div>
    )
}

export default DetailsPage;