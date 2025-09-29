import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const middleware = async  (request) => {
    // const userType = request.cookies.get('userType')?.value || "admin"

    // if (userType === "admin") {
    //     return NextResponse.redirect(new URL('/dashboard', request.url))
    // }
    // return NextResponse.redirect(new URL('/', request.url))

    const token = cookies(request).get('next-auth.session-token')
    console.log(token)

    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/dashboard',
}