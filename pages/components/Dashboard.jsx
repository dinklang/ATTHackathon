import SideBar from '../components/SideBar';

const Dashboard = () => {
    return (
        <div>
        <SideBar></SideBar>
        <div className="block ml-64 p-10 h-max text-att-black">
            <div className="align-middle">Welcome to the AT&T API testing dashboard.</div>
            <div className="align-middle">To begin, please click one of the buttons in the dashboard to test 5G and Fiber speed using your API of choice </div>
        </div>
        </div>
    )
}

export default Dashboard;