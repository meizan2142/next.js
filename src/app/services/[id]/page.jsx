import { getSinglePostDetails } from "@/api/api";

export const generateMetadata = async ({ params }) => {
    const post = await getSinglePostDetails(params.id)

    return {
        title: `${post.title} | Saif`,
        description: post.body,
    }
}

// export const metadata = {
//     title: post.title,
//     description: post.body,
// };

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