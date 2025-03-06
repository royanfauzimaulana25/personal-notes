import React from "react";
// import NoteSearch from "./NoteSearch";


function NoteHeader({ keyword, onSearch }) {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <div className="note-search">
                <input type="text" placeholder="Cari Catatan ...." onChange={() => onSearch(keyword)} />
            </div>
        </div>
    )
}

export default NoteHeader;


// class NoteHeader extends React.Component {
//     constructor(props) {
//         super(props);
//
//         // Inisialisasi state search
//         this.state = {
//             keyword: ''
//         }
//
//         // Binding Handler
//         this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
//     }
//
//     // Event Handler
//     onSearchEventHandler(event) {
//         // Need To Be Repaired
//         this.setState(() => {
//             return {
//                 keyword: event.target.value,
//             }
//         })
//     }
//     render() {
//         return (
//             <div className="note-app__header">
//                 <h1>Notes</h1>
//                 <NoteSearch keyword={this.state.keyword} onSearch={this.onSearchEventHandler} />
//             </div>
//         )
//     }
// }
