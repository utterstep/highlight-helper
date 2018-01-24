import React, { Component } from 'react';

import Form from './__form/highlight-helper__form.js';
import Markup from './__markup/highlight-helper__markup.js';

import './highlight-helper.css';

class HighlightHelper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    onTextChange = newText => {
        this.setState({text: newText});
    }

    render() {
        const {text} = this.state;

        return (
            <div className="highlight-helper">
                <Form onChange={this.onTextChange} text={text} />
                <Markup text={text} />
            </div>
        );
    }
}

export default HighlightHelper;
