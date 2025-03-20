import KakaoLogin from "../../components/sections/auth/KakoLogin";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">반복</h1>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gary-500"
              placeholder="이메일 주소를 입력하세요"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-gray-500 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                로그인 상태 유지
              </label>
            </div>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              비밀번호 찾기
            </a>
          </div>

          <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            로그인
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <KakaoLogin />
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?{" "}
            <a
              href="#"
              className="text-gray-900 hover:text-gray-900 font-medium"
            >
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
