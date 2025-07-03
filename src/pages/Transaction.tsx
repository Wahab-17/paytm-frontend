import { useEffect, useState } from "react";
import axios from "axios";
import Navbarr from "../maincomponents/Navbarr";

interface UserInfo {
  firstName: string;
  lastName: string;
}

interface Transaction {
  _id: string;
  from: UserInfo;
  to: UserInfo;
  amount: number;
  timestamp: string;
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please login.");
          return;
        }

        const res = await axios.get(
          "https://paytm-backend-1-tg54.onrender.com/api/v1/account/transactions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTransactions(res.data.transactions);
      } catch (e: any) {
        console.error("❌ Error fetching transactions:", e);
        setError("Failed to fetch transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div className="p-4 text-gray-500">Loading transactions...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <>
    <Navbarr/>
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Transaction History
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions found.</p>
      ) : (
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx._id}
              className="bg-white border shadow-sm rounded-2xl p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-600">
                  From:{" "}
                  <span className="font-medium">
                    {tx.from.firstName} {tx.from.lastName}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  To:{" "}
                  <span className="font-medium">
                    {tx.to.firstName} {tx.to.lastName}
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(tx.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="text-green-600 font-semibold text-lg">
                ₹{tx.amount}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
