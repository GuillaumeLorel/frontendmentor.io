import ToggleMode from "./ToggleMode";

const Header = () => {
  return (
    <header className="bg-white dark:bg-dark-blue py-6 px-4 sm:px-14 sm:px-20 header-shadow sticky top-0 z-50">
      <div className="flex items-center justify-between w-full max-w-[1280px] m-auto">
        <h1 className="text-sm sm:text-2xl font-extrabold text-very-dark-blue-light-mode dark:text-white">
          Where in the world?
        </h1>
        <ToggleMode />
      </div>
    </header>
  );
};

export default Header;
