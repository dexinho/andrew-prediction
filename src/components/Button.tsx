type ButtonProps = {
  type: "button" | "submit";
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button
      className="border h-10 rounded-2xl bg-orange-200 hover:bg-slate-200"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
