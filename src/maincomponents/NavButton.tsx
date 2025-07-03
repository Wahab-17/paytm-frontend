// src/components/NavButton.tsx
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  label: string;
  to: string;
}

export default function NavButton({ label, to }: NavButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="w-full mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
}
