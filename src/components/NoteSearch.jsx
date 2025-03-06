import React from "react";
import NoteApp from "./NoteApp.jsx";

function NoteSearch ({ keyword, onSearch }) {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari Catatan ...." onChange={() => onSearch(keyword)} />
        </div>
    )
}

export default NoteSearch;