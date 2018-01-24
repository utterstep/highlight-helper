import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class HighlightHelperForm extends Component {
    onChange = ({target: {value}}) => {
        const {onChange} = this.props;

        if (onChange) {
            onChange(value);
        }
    }

    render() {
        const {text} = this.props;

        return (
            <div className="highlight-helper__form">
                <h3>Текст</h3>
                <Textarea
                    className="highlight-helper__form-textarea"
                    onChange={this.onChange}
                    value={text}
                    />
            </div>
        );
    }
}

export default HighlightHelperForm;
