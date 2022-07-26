import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/JobsContainer";

const JobsContainer = () => {
    const {
        getJobs,
        jobs,
        isLoading,
        page,
        totalJobs,
        search,
        searchStatus,
        searchType,
        sort,
        numOfPages
    } = useAppContext();
    useEffect(() => {
        getJobs();
        // eslint-disable-next-line
    }, [page, search, searchStatus, searchType, sort]);

    if (isLoading) {
        <Loading center />;
    }

    if (jobs.length < 1) {
        return (
            <Wrapper>
                <h2>no jobs to display...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && "s"} found
            </h5>
            <div className="jobs">
                {jobs.map(job => {
                    return <Job key={job._id} {...job} />;
                })}
            </div>
            {/* pagination buttons */}
            {numOfPages > 1 && <PageBtnContainer />}
        </Wrapper>
    );
};

export default JobsContainer;
