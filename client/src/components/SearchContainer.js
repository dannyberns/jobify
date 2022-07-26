import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
    const {
        isLoading,
        search,
        searchStatus,
        searchType,
        sort,
        sortOptions,
        statusOptions,
        jobTypeOptions,
        handleChange,
        clearFilters
    } = useAppContext();
    const handleSearch = e => {
        const name = e.target.name;
        const value = e.target.value;
        if (isLoading) return;
        handleChange({ name, value });
    };
    return (
        <Wrapper>
            <form className="form">
                <h4>search form</h4>
                <div className="form-center">
                    {/* search company */}
                    <FormRow
                        type="text"
                        name="search"
                        value={search}
                        handleChange={handleSearch}
                    />
                    {/* search by status */}
                    <FormRowSelect
                        labelText="job status"
                        name="searchStatus"
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={["all", ...statusOptions]}
                    />
                    {/* search by job type */}
                    <FormRowSelect
                        labelText="job type"
                        name="searchType"
                        value={searchType}
                        handleChange={handleSearch}
                        list={["all", ...jobTypeOptions]}
                    />
                    {/* sort */}
                    <FormRowSelect
                        name="sort"
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                    />
                    <button
                        type="button"
                        className="btn btn-block btn-danger"
                        disabled={isLoading}
                        onClick={() => {
                            clearFilters();
                        }}
                    >
                        clear filters
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

export default SearchContainer;
