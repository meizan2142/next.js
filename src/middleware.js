import { NextResponse } from 'next/server'

export function middleware(request) {
    const userType = request.cookies.get('userType')?.value || "admin"

    if (userType === "admin") {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: '/about',
}