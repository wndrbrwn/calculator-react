const Button = ({ name ,onClickButton}) => {
  return (
    <button
      className={`bg-[#828284] border-2 border-[#454448] w-11 h-11 flex justify-center items-center shadow-sm text-white ${
        name === "+"
          ? "bg-orange-500 text-white"
          : name === "-"
          ? "bg-orange-500 text-white"
          : name === "*"
          ? "bg-orange-500 text-white"
          : name === "/"
          ? "bg-orange-500 text-white"
          : name === "Ent" || name === "Del"
          ? "bg-gray-500 text-white"
          : "bg-[#828284]"
      }`}
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;