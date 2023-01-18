import React from "react";

function NotesSearch({searchInput, onSearch}){
    return (
        <div className="note-search">
            <input type="search" placeholder="Search here ..." value={searchInput} onChange={onSearch}  />

        </div>
    
    )
}

export default NotesSearch;
