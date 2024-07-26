type TProps = {
  text: string | React.ReactNode;
  clickHandler: () => void;
  bgColor?: string;
  txtColor?: string;
  className?: string;
  padding?: string
  fontSize?: number
};

const BaseButton = ({
  text,
  clickHandler,
  className,
  bgColor = "#FD695A",
  txtColor = "white",
  padding = "px-8 py-4",
  fontSize = 16
}: TProps) => {
  return (
    <button
      onClick={clickHandler}
      style={{ backgroundColor: bgColor, color: txtColor, fontSize: `${fontSize}px` }}
      className={`${padding} text-lg rounded-[50px] hover:scale-95 duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default BaseButton;
