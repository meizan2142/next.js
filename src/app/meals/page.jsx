import Meals from "@/Components/Meals"



const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { next: {revalidate: 5}});
    const data = await res.json()
    return data.currentTime
}


export const metadata = {
    title: "Meals | Next.js",
    description: "Meals Page",
};

const MealsPage = async() => {
    const currentTime = await getTime();
    return (
        <div className="h-screen p-12">
            <div>
                <h1>Current Time: {currentTime}</h1>
            </div>
            <h1>Choose your Meals</h1>
            <Meals />
        </div>
    )
}

export default MealsPage