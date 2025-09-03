import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// http://localhost:3000/api/auth/signin

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider ({
            credentials : {
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
                if(!creadentials) {
                    return null;
                }
                return true;
            }
        })
    ]
})

export {handler as GET, handler as POST}