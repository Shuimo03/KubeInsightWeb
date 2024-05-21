import { NextRequest, NextResponse } from "next/server";

export default async function AuthMiddleware(req: NextRequest): Promise<NextResponse> {
  // Your logic for authentication goes here
  // Make sure to call next() to continue to the next middleware or route handler
  return NextResponse.next();
}