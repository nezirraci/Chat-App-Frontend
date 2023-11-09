function GroupItemSearch() {
    return ( 
        <>
              <div className="search-box chat-search-box">
        <div className="input-group rounded-3">
          <span
            className="input-group-text text-muted bg-light pe-1 ps-3"
            id="basic-addon1"
          >
            <i className="ri-search-line search-icon font-size-18" />
          </span>
          <input
            type="text"
            className="form-control bg-light"
            placeholder="Search groups..."
            aria-label="Search groups..."
            aria-describedby="basic-addon1"
          />
        </div>
      </div>{" "}
      {/* Search Box*/}
        </>
     );
}

export default GroupItemSearch;