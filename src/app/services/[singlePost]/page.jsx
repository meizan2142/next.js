const SinglePost = ({ params = {} }) => {
    const singlePost = params?.title ? decodeURIComponent(params.title) : '';
    console.log(singlePost);
    return (
        <div>SinglePost</div>
    )
}

export default SinglePost