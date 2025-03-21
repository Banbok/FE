import useUserStore from "../../zustand/userStore";

const LogoutButton = () => {
  const logout = useUserStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout} className="logout-button cursor-pointer">
      로그아웃
    </button>
  );
};

export default LogoutButton;
