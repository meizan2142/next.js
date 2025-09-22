import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
    {
        "id": 1,
        "name": "Saif",
        "email": "saif@gmail.com",
        "password": "saif@gmail.com",
        "type": "admin"
    },
    {
        "id": 2,
        "name": "Brian Smith",
        "email": "brian.smith@example.com",
        "password": "BrianPass!456",
        "type": "user"
    },
    {
        "id": 3,
        "name": "Clara Williams",
        "email": "clara.williams@example.com",
        "password": "Clara#789",
        "type": "moderator"
    }
]


// http://localhost:3000/api/auth/signin

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    required: true,
                    placeholder: "Enter your email",
                    autocomplete: "email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Enter your Password",
                    autocomplete: "current-password"
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
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.type = token.type
            return session;
        },
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token;
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

