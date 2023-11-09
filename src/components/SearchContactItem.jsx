function SearchContactItem(props) {

    return (  <>
            <div className="search-box chat-search-box">
        <div className="input-group bg-light  input-group-lg rounded-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-link text-decoration-none text-muted pe-1 ps-3"
              type="button"
            >
              <i className="ri-search-line search-icon font-size-18" />
            </button>
          </div>
          <input
            onInput={(event) =>props.SearchingFunction(event.target.value) }
            type="text"
            className="form-control bg-light"
            placeholder="Search users.."
          />
        </div>
      </div>
            </>);
}

export default SearchContactItem;