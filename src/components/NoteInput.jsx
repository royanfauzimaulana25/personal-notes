import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title:'',
            body:''
        }

        // Binding Handler
        this.onTitleEventChangeHandler = this.onTitleEventChangeHandler.bind(this);
        this.onBodyEventChangeHandler = this.onBodyEventChangeHandler.bind(this);
    }

    // Handler
    onTitleEventChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyEventChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    // Render
    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" className="note-input__title" placeholder="Masukan Judul Catatan..." value={this.state.title} onChange={this.onTitleEventChangeHandler} />
                <input type="text" className="note-input__body" placeholder="Masukan Catatan Anda..." value={this.state.body} onChange={this.onBodyEventChangeHandler} />
                <button type="submit">Tambah Catatan</button>
            </form>
        )
    }
}

export default NoteInput;