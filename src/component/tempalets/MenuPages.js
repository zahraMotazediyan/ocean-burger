import Card from "@/component/modules/Card";
import images from "../../assets/images/imgLoader";


function MenuPages({data}) {
    return (
        <div className="categories m-auto max-w-[900px]:p-5 max-w-[600px]:p-2.5">
            <h2 className="w-fit mb-12 text-2xl subBorder max-w-[900px]:mb-12 max-w-[900]:m-auto">Menu</h2>
            <div className="flex flex-wrap justify-between max-w-[900px]:justify-around">
                {
                    data.map((food) => (
                        <Card key={food.id} {...food} ImgSource={images[food.id - 1]}/>
                    ))
                }
            </div>
        </div>
    );
}

export default MenuPages;