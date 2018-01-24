import React, { Component } from 'react';

import HighlightHelper from '../highlight-helper/highlight-helper.js';

import './app.css';

const YANDEX = 'https://yandex.ru/';
const YANDEX_EDUCATION = 'https://education.yandex.ru/'
const LOGOAAS = 'https://yastatic.net/q/logoaas/v1/';

function buildSrc(text, theme) {
    const query = theme === 'white' ? '?color=ffffff' : '';

    return `${LOGOAAS}${text}.svg${query}`;
}

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <span className="app__logo">
                        <a href={YANDEX}>
                            <img src={buildSrc('Яндекс ', 'white')} />
                        </a>
                        <a href={YANDEX_EDUCATION}>
                            <img src={buildSrc('Просвещение', 'white')} />
                        </a>
                    </span>
                    <h1 className="app__title">Размечатор</h1>
                </header>
                <div className="app__main">
                    <HighlightHelper />
                </div>
            </div>
        );
    }
}

export default App;
