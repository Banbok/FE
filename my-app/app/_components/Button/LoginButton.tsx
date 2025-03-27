"use client";

import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/login" className="px-4 py-2">
      로그인
    </Link>
  );
};

export default LoginButton;
