
interface Button2Props {
  label: string | JSX.Element;
  onClick: () => void;
  disabled?: boolean;
}

export function Button2({ label, onClick, disabled = false }: Button2Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300 focus:outline-none focus:ring-4 
        ${disabled ? "bg-green-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 focus:ring-green-300"}`}
    >
      {label}
    </button>
  );
}

export default Button2;
