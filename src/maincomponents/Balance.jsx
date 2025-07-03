
import { useEffect, useState } from "react";
import axios from "axios";
import { useBalance } from "../context/BalanceContext";


export const Balance = () => {
  const { balance, setBalance } = useBalance();
  const [loading, setLoading] = useState(!balance);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!balance) {
      const fetchBalance = async () => {
        try {
          const res = await axios.get(
            "https://paytm-backend-1-tg54.onrender.com/api/v1/account/balance",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setBalance(res.data.balance);
        } catch (err) {
          console.error("Error fetching balance", err);
        } finally {
          setLoading(false);
        }
      };

      fetchBalance();
    }
  }, [balance, setBalance, token]);

  return (
    <div className="flex justify-center items-center gap-2 text-xl font-semibold my-4">
      {loading ? (
        "Fetching balance..."
      ) : (
        <>
          <span className="font-bold">Your balance:</span>
          <span>₹{balance}</span>
        </>
      )}
    </div>
  );
};

