// import { useSearchParams } from 'react-router-dom';
// import axios from "axios";
// import { useState } from 'react';
// import {Button2} from '../maincomponents/Button2'


// export const Send = () => {
//   const [searchParams] = useSearchParams();
//   const id = searchParams.get("id");
//   const name = searchParams.get("name");
//   const [amount, setAmount] = useState("");

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-md p-8 w-96 space-y-6">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold">Send Money</h2>
//         </div>

//         {/* Avatar */}
//         <div className="flex items-center space-x-4">
//           <div className="w-12 h-12 rounded-full overflow-hidden">
//             <img
//               src={`https://api.dicebear.com/9.x/initials/svg?seed=${name || "?"}`}
//               alt="avatar"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//           <h3 className="text-2xl font-semibold">{name}</h3>
//         </div>

//         {/* Input */}
//         <div className="space-y-2">
//           <label className="text-sm font-medium text-gray-700">Amount (in Rs)</label>
//           <input
//             onChange={(e) => setAmount(e.target.value)}
//             type="number"
//             className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Enter amount"
//           />
//         </div>

//         {/* Green Button using Button1 */}
//         <Button2
//           label="Initiate Transfer"
//           onClick={() => {
//             if (!amount || amount <= 0) {
//               alert("Please enter a valid amount");
//               return;
//             }

//             axios.post("http://localhost:3000/api/v1/account/transfer", {
//               to: id,
//               amount
//             }, {
//               headers: {
//                 Authorization: "Bearer " + localStorage.getItem("token")
//               }
//             }).then(() => {
//               alert("Transfer successful");
//             }).catch((e) => {
//               alert(e.response?.data?.message || "Transfer failed");
//             });
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Send;
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button2 from "../maincomponents/Button2";

export const Send = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");





return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-96 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Send Money</h2>
        </div>

        {/* Avatar */}
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

        {/* Input */}
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

        {/* Green Button using Button2 */}
        <Button2
          label="Initiate Transfer"
          onClick={() => {
            const numericAmount = Number(amount);

            if (!amount || numericAmount <= 0) {
              alert("Please enter a valid amount");
              return;
            }

            axios
              .post(
                "http://localhost:3000/api/v1/account/transfer",
                {
                  to: id,
                  amount: numericAmount,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then(() => {
                alert("Transfer successful");
              })
              .catch((e) => {
                alert(e.response?.data?.message || "Transfer failed");
              });
          }}
        />
      </div>
    </div>
  );
};

export default Send;
