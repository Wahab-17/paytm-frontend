import { Users } from "../maincomponents/Users";
import ApppBar  from "../maincomponents/ApppBar";
import { Balance } from "../maincomponents/Balance";

export const Dashboard = () => {
  return (
    <div>
      <ApppBar /> 

      <div className="m-8">
        <Balance value={"90,000"} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
