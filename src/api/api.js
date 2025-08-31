export const getPosts = async () => {
    const res = await fetch(`${process.env.API_URL}/posts`);
    const data = await res.json();
    return data;
}

export const getSinglePostDetails = async (id) => {
    const res = await fetch(`${process.env.API_URL}/posts/${id}`)
    const data = await res.json()
    return data;
}

export const getMeals = async (meal) => {
    const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${meal}`)
    const data = await res.json()
    return data;
}