import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../modules/Card";
import Search from "../../assets/images/sources/search.png";
import Image from "next/image";
import Images from "@/assets/images/imgLoader";

function CategoriesPage({data}) {
    const router = useRouter();

    const [query, setQuery] = useState({difficulty: "", time: ""});

    useEffect(() => {
        const {difficulty, time} = router.query;
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({difficulty, time})
        }
    }, []);

    const changeHandler = (e) => {
        setQuery({...query, [e.target.name]: e.target.value})
    };

    const searchHandler = () => {
        router.push(
            {
                pathname: "/categories",
                query,
            });
    };

    return (
        <div className="categories m-auto max-w-[900px]:p-5 max-w-[600px]:p-2.5">
            <h2
                className="subBorder w-fit mb-[50px] text-2xl">Categories</h2>
            <div>
                <div className="max-w-[600px]:flex max-w-[600px]:flex-col">
                    <select
                        className="border-none w-[150px] h-[40px] rounded-lg mr-2.5 p-2.5 text-colorA shadow max-w-[600px]:w-full max-w-[600px]:m-marginMax"
                        value={query.difficulty} name="difficulty" onChange={changeHandler}>
                        <option value="">Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select
                        value={query.time} name="time" onChange={changeHandler}
                        className="border-none w-[150px] h-[40px] rounded-lg mr-2.5 p-2.5
                            text-colorA shadow max-w-[600px]:w-full max-w-[600px]:m-marginMax">
                        <option value="">Cooking Time</option>
                        <option value="more">More than 30 min</option>
                        <option value="less">Less than 30 min</option>
                    </select>
                    <button
                        onClick={searchHandler}
                        className="border-none bg-color text-white h-[35px] p-paSelect rounded-lg cursor-pointer">
                        Search
                    </button>
                </div>
                <div className="flex flex-wrap justify-between mt-20 max-w-[600px]:justify-around">
                    {
                        !data.length ? (
                            <Image src={Search} className="m-auto" alt="categorise"/>) : null}
                    {
                        data.map((food) => (<Card key={food.id} {...food} ImgSource={Images[food.id - 1]}/>))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage;