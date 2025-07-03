import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button2 from "../maincomponents/Button2";
import { useBalance } from "../context/BalanceContext";
import NavButton from "../maincomponents/NavButton.tsx";
import Navbarr from "../maincomponents/Navbarr";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Send = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const { setBalance } = useBalance();

  const handleTransfer = async () => {
    const numericAmount = Number(amount);

    if (!amount || numericAmount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.post(
        "https://paytm-backend-1-tg54.onrender.com/api/v1/account/transfer",
        {
          to: id,
          amount: numericAmount,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const res = await axios.get(
        "https://paytm-backend-1-tg54.onrender.com/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setBalance(res.data.balance);

      const successSound = new Audio("/sounds/success.mp3");
      successSound.play();

      setTimeout(() => {
        toast.success("Transfer successful");
      }, 300);
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Transfer failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbarr />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-8 w-96 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Send Money</h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${name || "?"}`}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Amount (in Rs)
            </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter amount"
            />
          </div>

          <Button2
            onClick={handleTransfer}
            disabled={loading}
            label={
              loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  <span>Transferring...</span>
                </div>
              ) : (
                "Initiate Transfer"
              )
            }
          />

          <NavButton label="View Transaction History →" to="/transactions" />
        </div>
      </div>
    </>
  );
};

export default Send;
