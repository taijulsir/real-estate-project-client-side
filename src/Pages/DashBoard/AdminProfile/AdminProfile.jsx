import useAuth from "../../../Hooks/useAuth/useAuth";
import DashboardProfile from "../../../Shared/DashboardProfile/DashboardProfile";

const AdminProfile = () => {
    const {user} = useAuth()
    return (
        <div>
            <DashboardProfile user={user} description={"Greetings! As the driving force behind our real estate platform, I am not just an administrator but your dedicated ally in navigating the world of real estate. Backed by a rich tapestry of professional experience, I am committed to more than transactions; I'm committed to your aspirations. Our mission centers on transparency, innovation, and your ultimate satisfaction. Fueled by a profound grasp of market dynamics and powered by cutting-edge technology, we redefine the real estate journey. Beyond bricks and mortar, we build relationships. Explore a seamless real estate experience, where your goals are not just met but exceeded. Let's embark on this journey together."}></DashboardProfile>
        </div>
    );
};

export default AdminProfile;