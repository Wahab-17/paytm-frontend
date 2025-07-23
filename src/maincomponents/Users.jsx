// import { useEffect, useState } from "react"
// import { Button3 } from "./Button3";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// export const Users = () => {
//     // Replace with backend call
//     const [users, setUsers] = useState([]);
//     const [filter, setFilter] = useState("");

//     useEffect(() => {
//         axios.get("https://paytm-backend-1-tg54.onrender.com/api/v1/user/bulk?filter=" + filter)
//             .then(response => {
//                 setUsers(response.data.user)
//             })
//     }, [filter])

//     return <>
//         <div className="font-bold mt-6 text-lg">
//             Users
//         </div>
//         <div className="my-2">
//             <input onChange={(e) => {
//                 setFilter(e.target.value)
//             }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
//         </div>
//         <div>
//             {users.map(user => <User key={user._id} user={user} />)}

//         </div>
//     </>
// }

// function User({user}) {
//     const navigate = useNavigate();

//     return <div className="flex justify-between">
//         <div className="flex">
//             <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
//                 <div className="flex flex-col justify-center h-full text-xl">
//                     {user.firstName[0]}
//                 </div>
//             </div>
//             <div className="flex flex-col justify-center h-ful">
//                 <div>
//                     {user.firstName} {user.lastName}
//                 </div>
//             </div>
//         </div>

//         <div className="flex flex-col justify-center h-ful">
//             <Button3 onClick={(e) => {
//                 navigate("/send?id=" + user._id + "&name=" + user.firstName);
//             }} label={"Send Money"} />
//         </div>
//     </div>
// }
// import { useEffect, useState } from "react";
// import { Button3 } from "./Button3";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode";

// export const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState("");
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   let loggedInUserId = "";

//   if (token) {
//     try {
//       const decoded = jwtDecode(token);
//       loggedInUserId = decoded.userId;
//     } catch (err) {
//       console.error("Failed to decode token");
//     }
//   }

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get(
//           `https://paytm-backend-1-tg54.onrender.com/api/v1/user/bulk?filter=${filter}`,
//           {
//             headers: {
//               Authorization: "Bearer " + token,
//             },
//           }
//         );

//         // ✅ Filter out the current user
//         const filtered = res.data.user.filter(
//           (user) => user._id !== loggedInUserId
//         );
//         setUsers(filtered);
//       } catch (err) {
//         console.error("Error fetching users", err);
//       }
//     };

//     fetchUsers();
//   }, [filter]);

//   return (
//     <>
//       <div className="font-bold mt-6 text-lg">Users</div>
//       <div className="my-2">
//         <input
//           onChange={(e) => {
//             setFilter(e.target.value);
//           }}
//           type="text"
//           placeholder="Search users..."
//           className="w-full px-2 py-1 border rounded border-slate-200"
//         />
//       </div>
//       <div>
//         {users.map((user) => (
//           <User key={user._id} user={user} />
//         ))}
//       </div>
//     </>
//   );
// };

// function User({ user }) {
//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-between my-2">
//       <div className="flex">
//         <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center text-xl mr-3">
//           {user.firstName[0]}
//         </div>
//         <div className="flex flex-col justify-center">
//           <div>
//             {user.firstName} {user.lastName}
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col justify-center">
//         <Button3
//           onClick={() =>
//             navigate(`/send?id=${user._id}&name=${user.firstName}`)
//           }
//           label={"Send Money"}
//         />
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { Button3 } from "./Button3";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode"; // ✅ correct import

// export const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState("");
//   const [currentUserId, setCurrentUserId] = useState("");

//   useEffect(() => {
//     // ✅ Get userId from token
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded = jwtDecode(token);
//       setCurrentUserId(decoded.userId);
//     }
//   }, []);

//   useEffect(() => {
//     axios
//       .get(
//         "https://paytm-backend-1-tg54.onrender.com/api/v1/user/bulk?filter=" +
//           filter
//       )
//       .then((response) => {
//         setUsers(response.data.user);
//       });
//   }, [filter]);

//   const filteredUsers = users.filter((user) => user._id !== currentUserId);

//   return (
//     <>
//       <div className="font-bold mt-6 text-lg">Users</div>
//       <div className="my-2">
//         <input
//           onChange={(e) => setFilter(e.target.value)}
//           type="text"
//           placeholder="Search users..."
//           className="w-full px-2 py-1 border rounded border-slate-200"
//         />
//       </div>
//       <div>
//         {filteredUsers.map((user) => (
//           <User key={user._id} user={user} />
//         ))}
//       </div>
//     </>
//   );
// };

// function User({ user }) {
//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-between">
//       <div className="flex">
//         <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
//           <div className="flex flex-col justify-center h-full text-xl">
//             {user.firstName[0]}
//           </div>
//         </div>
//         <div className="flex flex-col justify-center h-ful">
//           <div>
//             {user.firstName} {user.lastName}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col justify-center h-ful">
//         <Button3
//           onClick={() => {
//             navigate("/send?id=" + user._id + "&name=" + user.firstName);
//           }}
//           label={"Send Money"}
//         />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Button3 } from "./Button3";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Use AuthContext

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const { userId } = useAuth(); // ✅ Get logged-in userId

  useEffect(() => {
    axios
      .get(
        "https://paytm-backend-1-tg54.onrender.com/api/v1/user/bulk?filter=" +
          filter
      )
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  const filteredUsers = users.filter((user) => user._id !== userId); // ✅ Exclude logged-in user

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {filteredUsers.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mb-3">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Button3
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
          label="Send Money"
        />
      </div>
    </div>
  );
}

