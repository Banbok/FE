import { Title } from "../../components/sections/Title";
import { CodeUrlInput } from "../../components/sections/CodeUrlInput";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Home = () => {
  const activeSection = useScrollPosition();

  return (
    <div className="w-full">
      <Title isActive={activeSection === 0} />
      <CodeUrlInput isActive={activeSection === 1} />
    </div>
  );
};

export default Home;
