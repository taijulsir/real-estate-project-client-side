import useAuth from "../../../Hooks/useAuth/useAuth";
import DashboardProfile from "../../../Shared/DashboardProfile/DashboardProfile";


const AgentProfile = () => {
    const {user} = useAuth()
    return (
        <div>
           <DashboardProfile user={user} description={`"Welcome to my world of real estate! I am ${user?.displayName}, a seasoned professional with 5 years of experience dedicated to turning your homeownership dreams into reality. Specializing in  I bring expertise, certifications, and a commitment to exceptional service. My approach is client-centric, ensuring effective communication and a smooth journey, whether you're buying or selling. Recognized for Noble, I take pride in community involvement beyond real estate. Let's connect to discuss your unique goals. I'm here to guide you through every step, making your real estate experience seamless and enjoyable."`}></DashboardProfile> 
        </div>
    );
};

export default AgentProfile;