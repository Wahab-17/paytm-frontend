import { Appbar} from "../maincomponents/Appbar";
import { Balance } from "../maincomponents/Balance";
import { Users } from "../maincomponents/Users";


export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"90,000"} />
            <Users />
        </div>
    </div>
}

export default Dashboard;