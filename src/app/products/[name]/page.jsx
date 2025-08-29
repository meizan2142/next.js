const Page = ({ params = {} }) => {
    const product = params?.name ? decodeURIComponent(params?.name) : '';
    console.log(product);

    return (
        <div>Single Product: {product}</div>
    )
}

export default Page;