const FormRowSelect = ({ name, value, handleChange, labelText, list }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>

            <select
                value={value}
                name={name}
                onChange={handleChange}
                className="form-select"
            >
                {list.map((item, index) => {
                    return (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FormRowSelect;
