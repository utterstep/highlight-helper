import React from 'react';
import serialize from 'serialize-javascript';

const HIGHLIGHT_SELECTION_RE = /\[(.+?)]/gu;

const cleanTextReplacer = (match, p1) => p1;

const textToMarkup = text => {
    let matches = 0;
    let spans = [];
    let match;

    while ((match = HIGHLIGHT_SELECTION_RE.exec(text)) !== null) {
        let start = match.index - matches * 2;
        let end = match.index + (match[0].length - 2) - matches * 2;

        matches += 1;

        spans.push([start, end]);
    }

    return {
        marker: {
            type: 'highlight',
            options: {
                text: text.replace(HIGHLIGHT_SELECTION_RE, cleanTextReplacer),
                highlight_types: {
                    highlight: ['highlight/smth']
                }
            }
        },
        answer: [
            {
                'highlight/smth': spans
            }
        ]
    };
};

const HighlightHelperMarkup = ({text}) => {
    const markup = textToMarkup(text);

    return (
        <div className="highlight-helper__markup">
            <h3>Разметка</h3>
            <pre className="highlight-helper__markup-code">
                {serialize(markup, {isJSON: true, space: 2})}
            </pre>
        </div>
    );
};

export default HighlightHelperMarkup;
