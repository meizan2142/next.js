import { getPosts } from "@/api/api"

const SevicesPage = async () => {
    const postData = await getPosts()
    return (
        <div className="grid grid-cols-4 gap-4">
            <div>
                {
                    postData.map(({ id, body, title }) => {
                        <div key={id} className="space-y-4 border text-black">
                            <h1>Title: {title}</h1>
                            <p>Description: {body}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SevicesPage