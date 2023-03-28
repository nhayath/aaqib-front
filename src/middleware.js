// middleware.ts
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
    const response = new NextResponse();
    let userCookie = req.cookies.get("user");
    console.log(userCookie);
    let user = {};
    if (userCookie) {
        user = JSON.parse(userCookie.value);
    }

    if (!userCookie || !user || !user.role === "admin") {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/dashboard/:path*",
};
