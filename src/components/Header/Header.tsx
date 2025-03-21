import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/userStore";
import LogoutButton from "../Button/LogoutButton";

const Header = () => {
  const { isLoggedIn } = useUserStore();

  return (
    // <header className="flex justify-between items-center p-4 bg-gray-800 text-white w-full">
    <header className="flex justify-between items-center fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 pointer-events: none;">
      <h1 className="text-xl font-bold">Banbok</h1>
      <nav>
        {isLoggedIn ? (
          <LogoutButton />
        ) : (
          <Link to="/login" className="px-4 py-2">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
