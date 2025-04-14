import ProfileButton from "../Button/ProfileButton";
import LoginStatusButton from "./LoginStatusButton";

const Header = () => {
  return (
    <header className="flex justify-between absolute top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 pointer-events: none;">
      <h1 className="text-xl font-bold">Banbok</h1>
      <div className="flex items-center gap-4">
        <ProfileButton />
        <LoginStatusButton />
      </div>
    </header>
  );
};

export default Header;
