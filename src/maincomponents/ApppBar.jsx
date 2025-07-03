import { Link } from "react-router-dom";

 function ApppBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-green-600">PayFlow</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">
          Home
        </Link>
        <Link to="/send" className="text-gray-700 hover:text-green-600 font-medium">
          Send
        </Link>
        <Link to="/transactions" className="text-gray-700 hover:text-green-600 font-medium">
          Transactions
        </Link>
      </div>
    </nav>
  );
}
export default ApppBar;