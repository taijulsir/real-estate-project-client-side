import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Title from "../../../Shared/Title/Title";
import ReportedCards from "./ReportedCards";


const ReportedProperty = () => {
    const axiosSecure = useAxiosSecure()
    const {data: reportedProperty = [],refetch} = useQuery({
        queryKey: [ "reportedProperty"],
        queryFn: async() => {
            const res = await axiosSecure.get('/api/v1/reportedProperties')
            return res.data;
        }
    })
    return (
        <div className="mt-5">
            <Title heading={"Manage All Reported"} colorHeading={"Properties"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen mx-6">
                {reportedProperty?.map(report=> <ReportedCards key={report._id} report={report} refetch={refetch}></ReportedCards>)}
            </div>
        </div>
    );
};

export default ReportedProperty;