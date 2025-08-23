import { getSinglePostDetails } from "@/api/api";

const SinglePost = async ({ params }) => {
    const { body, title } = await getSinglePostDetails(params.id)

    return (
        <div className="grid grid-cols-1 space-y-2">
            <h1>Title: {title}</h1>
            <p>Description: {body}</p>
        </div>
    )
}

export default SinglePost