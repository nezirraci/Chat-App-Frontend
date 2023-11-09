function ChatRoomItemSearch() {

    return ( <>
         <div className="px-4 pt-4">
      <h4 className="mb-4">Chats</h4>
      <div className="search-box chat-search-box">
        <div className="input-group mb-3 rounded-3">
          <span
            className="input-group-text text-muted bg-light pe-1 ps-3"
            id="basic-addon1"
          >
            <i className="ri-search-line search-icon font-size-18" />
          </span>
          <input
            type="text"
            className="form-control bg-light"
            placeholder="Search messages or users"
            aria-label="Search messages or users"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>{" "}
      {/* Search Box*/}
    </div>{" "}
    </> );
}

export default ChatRoomItemSearch;