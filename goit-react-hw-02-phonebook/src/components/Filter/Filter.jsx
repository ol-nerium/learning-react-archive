const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <label htmlFor="filter"></label>
      <input
        value={filter}
        onChange={handleChange}
        type="text"
        name="filter"
        id="filter"
      />
    </>
  );
};

export default Filter;
