import Image from "next/image";

export function HomeButton({ icon, title }) {
  const iconStyle = {
    backgroundColor:
      title === "HTML"
        ? "#FFF1E9"
        : title === "CSS"
        ? "#E0FDEF"
        : title === "Javascript"
        ? "#EBF0FF"
        : "#F6E7FF",
    borderRadius: "8px",
  };

  return (
    <button className="rounded-xl sm:rounded-3xl p-3 sm:p-5 flex items-center gap-4 sm:gap-8 shadow-btn dark:shadow-none bg-white dark:bg-navy w-full">
      <Image
        src={icon}
        alt={title}
        width={56}
        height={56}
        style={iconStyle}
        className="p-2 w-[40px] sm:min-w-[56px] h-[40px] sm:min-h-[56px]"
      />
      <span className="heading-s">{title}</span>
    </button>
  );
}

export function QuizButton({
  index,
  title,
  onClick,
  color,
  selected,
  correctAnswer,
  disabled,
}) {
  const buttonStyle = {
    borderColor:
      selected && color === "green"
        ? "#26D782"
        : selected && color === "red"
        ? "#EE5454"
        : selected
        ? "#A729F5"
        : "transparent",
  };

  const iconStyle = {
    backgroundColor:
      selected && color === "green"
        ? "#26D782"
        : selected && color === "red"
        ? "#EE5454"
        : selected
        ? "#A729F5"
        : "#F4F6FA",
    borderRadius: "8px",
    color: selected ? "white" : "#626C7F",
  };

  return (
    <button
      onClick={onClick}
      className="rounded-xl sm:rounded-3xl p-3 sm:py-[15px] sm:px-[17px] flex items-center gap-4 sm:gap-8 shadow-btn dark:shadow-none bg-white dark:bg-navy w-full border-[3px] border-solid border-white dark:border-light-bluish"
      style={buttonStyle}
      disabled={disabled}>
      <span
        className="min-w-[40px] sm:min-w-[56px] min-h-[40px] sm:min-h-[56px] flex items-center justify-center heading-s"
        style={iconStyle}>
        {index}
      </span>
      <p className="heading-s text-left">{title}</p>
      {selected && color === "green" && (
        <Image
          src="/images/icon-correct.svg"
          alt="correct"
          width={30}
          height={30}
          className="ml-auto"
        />
      )}
      {correctAnswer === title && color === "red" && (
        <Image
          src="/images/icon-correct.svg"
          alt="correct"
          width={30}
          height={30}
          className="ml-auto"
        />
      )}
      {selected && color === "red" && (
        <Image
          src="/images/icon-error.svg"
          alt="incorrect"
          width={30}
          height={30}
          className="ml-auto"
        />
      )}
    </button>
  );
}
