import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
    const {
        isEditing,
        isLoading,
        showAlert,
        displayAlert,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
        handleChange,
        clearValues,
        createJob,
        editJob
    } = useAppContext();

    const handleSubmit = e => {
        e.preventDefault();

        if (!position || !company || !jobLocation) {
            displayAlert();
            return;
        }
        if (isEditing) {
            editJob();
            return;
        }
        createJob();
    };

    const handleJobInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({ name, value });
    };
    return (
        <Wrapper>
            <form className="form">
                <h3>{isEditing ? "edit job" : "add job"}</h3>
                {showAlert && <Alert />}

                <div className="form-center">
                    {/* position */}
                    <FormRow
                        type="text"
                        value={position}
                        name="position"
                        handleChange={handleJobInput}
                    />
                    {/* company */}
                    <FormRow
                        type="text"
                        value={company}
                        name="company"
                        handleChange={handleJobInput}
                    />
                    {/* job location */}
                    <FormRow
                        type="text"
                        value={jobLocation}
                        name="jobLocation"
                        labelText="job location"
                        handleChange={handleJobInput}
                    />
                    {/* job status */}
                    <FormRowSelect
                        value={status}
                        name="status"
                        handleChange={handleJobInput}
                        list={statusOptions}
                    />
                    {/* job type */}
                    <FormRowSelect
                        value={jobType}
                        name="jobType"
                        labelText="job type"
                        handleChange={handleJobInput}
                        list={jobTypeOptions}
                    />

                    <div className="btn-container">
                        <button
                            className="btn btn-block submit-btn"
                            type="submit"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            submit
                        </button>
                        <button
                            className="btn btn-block clear-btn"
                            onClick={e => {
                                e.preventDefault();
                                clearValues();
                            }}
                        >
                            clear
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};

export default AddJob;
