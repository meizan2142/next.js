import Meals from "@/Components/Meals"


export const metadata = {
    title: "Meals | Next.js",
    description: "Meals Page",
};

const MealsPage = () => {
    return (
        <div className="h-screen p-12">
            <h1>Choose your Meals</h1>
            <Meals />
        </div>
    )
}

export default MealsPage