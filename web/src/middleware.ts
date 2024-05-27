// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 从 localStorage 中读取登录状态变量
  const loginStatus = localStorage.getItem('loginStatus');
  // 检查是否存在登录状态
  if (loginStatus !== 'true') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // 如果存在登录状态，则允许请求继续
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
