import React from 'react';
import { getInitialData } from '../utils/data';

import NoteHeader from './NoteHeader';


class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        // Binding Handler

    }

    // Event Handler

    // Render
    render() {
        return (
            <div className="note-app">
                <NoteHeader />
            </div>
        )
    }
}

export default NoteApp;