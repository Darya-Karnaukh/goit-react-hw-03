const SearchBox = ({ inputValue, searchChangeInput }) => {
  return (
    <div>
      <label>
        <span>Find contacts by name</span>
        <input
          value={inputValue}
          onChange={searchChangeInput}
          name="fullName"
          type="text"
        />
      </label>
    </div>
  );
};

export default SearchBox;
