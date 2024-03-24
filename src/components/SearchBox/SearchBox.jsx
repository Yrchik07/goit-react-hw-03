function SearchBox({ onChangeFilter, filter }) {
  return (
    <section>
      <span>Find contacts by name</span>
      <br />
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </section>
  );
}

export default SearchBox;
