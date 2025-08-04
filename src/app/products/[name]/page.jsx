
const SingleProduct = ({params}) => {
    const product = decodeURIComponent(params?.name)
    console.log(product);
    
    return (
        <div>SingleProduct</div>
    )
}

export default SingleProduct    