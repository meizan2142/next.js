const CategoriesDetails = ({params}) => {
    if(params.products.length === 3) 
        return <div>{params.products[2]}</div>
        if (params.products.length === 2) 
            return <div>{params.products[1]}</div>
    return (
        <div>CategoriesDetails</div>
    )
}

export default CategoriesDetails