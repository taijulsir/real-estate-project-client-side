import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Title from "../../../Shared/Title/Title";
import ReportedCards from "./ReportedCards";


const ReportedProperty = () => {
    const axiosSecure = useAxiosSecure()
    const {data: reportedProperty = [],refetch} = useQuery({
        queryKey: "reportedProperty",
        queryFn: async() => {
            const res = await axiosSecure.get('/reportedProperties')
            return res.data;
        }
    })
    return (
        <div className="mt-5">
            <Title heading={"Manage All Reported"} colorHeading={"Properties"}></Title>
            <div>
                {reportedProperty?.map(report=> <ReportedCards key={report._id} report={report} refetch={refetch}></ReportedCards>)}
            </div>
        </div>
    );
};

export default ReportedProperty;