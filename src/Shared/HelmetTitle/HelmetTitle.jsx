/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";


const HelmetTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>
    );
};

export default HelmetTitle;