import connectDB from "@/lib/connectDB"

export const POST = async(req) => {
    try {
        const db = await connectDB();
        const userCollection = await db.collection('users');
        const newUser = await req.json();
        const res = await userCollection.insertOne(newUser);
        return Response.json({message: "New user created successfully"})
    }
    catch (error) {
        return Response.json({message: "Something went wrong"})
    }
}