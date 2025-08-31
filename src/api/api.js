export const getPosts = async () => {
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL); // Check if this logs undefined
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    return data;
}

export const getSinglePostDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}


export const getMeals = async (meal) => {
    const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${meal}`)
    const data = await res.json()
    return data;
}