import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "password": "Alice@123"
    },
    {
        "id": 2,
        "name": "Brian Smith",
        "email": "brian.smith@example.com",
        "password": "BrianPass!456"
    },
    {
        "id": 3,
        "name": "Clara Williams",
        "email": "clara.williams@example.com",
        "password": "Clara#789"
    }
]


// http://localhost:3000/api/auth/signin

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    required: true,
                    placeholder: "Enter your email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Enter your Password",
                },
            },

            async authorize(creadentials) {
                const { email, password } = creadentials;
                if (!creadentials) {
                    return null;
                }
                const currentUser = users.find(user => user.email === email);
                if (currentUser && currentUser.password === password) {
                    return currentUser;
                }
                return null;
            }
        })
    ]
})

export { handler as GET, handler as POST }

