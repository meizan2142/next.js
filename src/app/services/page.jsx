import { getPosts } from "@/api/api"

const SevicesPage = async () => {
    const postData = await getPosts()

    return (
        <div>
            <div className="grid grid-cols-4 gap-4 p-4">
                {
                    postData.slice(0, 12).map(({ id, body, title }) => (
                        <div key={id} className="space-y-4 border flex flex-col text-black p-2">
                            <h1>Title: {title}</h1>
                            <p>Description: {body}</p>
                            <button className="mt-auto border p-2 rounded-2xl bg-amber-500 text-white">View Details</button>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default SevicesPage