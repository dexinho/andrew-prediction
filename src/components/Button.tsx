'use client'

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  handleButtonClick?: () => void;
};

const Button = ({ type, title, handleButtonClick }: ButtonProps) => {

  return (
    <button
      onClick={handleButtonClick}
      className="flex justify-center items-center border h-10 rounded-2xl bg-orange-200 hover:bg-slate-200 p-4"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
