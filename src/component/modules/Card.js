import Location from "@/component/icons/Location";
import Dollar from "@/component/icons/Dollar";
import Link from "next/link";
import Image from "next/image";


function Card(props) {
    const {id, name, price, details, discount, ImgSource} = props;
    return (
        <div className="flex flex-col w-[270px] shadow p-2.5 mb-10 rounded-lg relative">
            <Image src={ImgSource} alt="source" className="w-full rounded"/>
            <div className="flex items-baseline justify-between m-marginDetail text-xs text-colorSpan">
                <h4 className="font-medium text-color text-base">{name}</h4>
                <div>
                    <Location/>
                    {details[0].Cuisine}
                </div>
            </div>
            <div className="flex left items-center">
                <Dollar/>
                {
                    discount ?
                        (<span className="text-colorD">{(price * (100 - discount)) / 100} $</span>)
                        :
                        (<span>{price} $</span>)
                }

                {
                    discount ?
                        <div
                            className="bg-colorD text-white p-1 rounded border-4 border-white border-solid
                     absolute top-[15px] left-[15px]">{discount}%
                        </div> : null
                }
            </div>
            <Link className="bg-color text-white block w-full text-center mt-5 p-padding rounded "
                  href={`/menu/${id}`}>See Details</Link>
        </div>
    );
}

export default Card;
