
interface Button1Props {
  label: string | JSX.Element;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button1({ label, onClick, disabled }: Button1Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300"}`}
    >
      {label}
    </button>
  );
}
