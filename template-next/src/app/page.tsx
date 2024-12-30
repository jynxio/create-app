'use client';

import React from 'react';
import css from './page.module.css';

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <button className={css.button} onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

export default App;
