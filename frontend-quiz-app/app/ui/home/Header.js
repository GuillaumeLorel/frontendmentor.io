import ToggleMode from "../global/ToggleMode";

const Header = () => {
  return (
    <header className="flex justify-end min-h-14 ml-auto">
      <ToggleMode />
    </header>
  );
};

export default Header;
