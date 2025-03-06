import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemContent id={id} title={title} createdAt={createdAt} body={body} />
            <NoteItemAction id={id} onDelete={onDelete}  onArchive={onArchive} />
        </div>
    )
}

export default NoteItem;