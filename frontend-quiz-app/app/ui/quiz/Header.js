import ToggleMode from "../global/ToggleMode";
import Image from "next/image";
import Link from "next/link";

const Header = ({ title, icon }) => {
  const iconStyle = {
    backgroundColor:
      title === "HTML"
        ? "#FFF1E9"
        : title === "CSS"
        ? "#E0FDEF"
        : title === "Javascript"
        ? "#EBF0FF"
        : "#F6E7FF",
    padding: "8px",
    borderRadius: "8px",
  };

  return (
    <header className="flex justify-between items-center">
      <Link className="flex items-center gap-6" href="/">
        <Image
          src={icon}
          alt={title}
          width={56}
          height={56}
          style={iconStyle}
        />
        <span className="heading-s">{title}</span>
      </Link>

      <ToggleMode />
    </header>
  );
};

export default Header;
