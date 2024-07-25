import CategoriesPage from "../../component/tempalets/CategoriesPage";

function Categories({data}) {
    return (
        <CategoriesPage data={data}/>
    )
}

export default Categories;

export async function getServerSideProps(context) {
    const {query: {difficulty, time}} = context;

    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();

    const filteredData = data.filter((item) => {
        const difficultyResult = item.details.filter((detail) => detail.Difficulty && detail.Difficulty === difficulty);

        const timeResult = item.details.filter(detail => {
            const cookingTime = detail["Cooking Time"] || "";
            const [detailTime] = cookingTime.split(" ");
            if (time === "less" && detailTime && +detailTime <= 30) {
                return detail;
            } else if (time === "more" && +detailTime > 30) {
                return detail;
            }
        });
        if (time && difficulty && timeResult.length && difficultyResult.length) {
            return item;
        } else if (!time && difficulty && difficultyResult.length) {
            return item;
        } else if (time && !difficulty && timeResult.length) {
            return item;
        }
    });

    return {
        props: {data: filteredData}
    }
}