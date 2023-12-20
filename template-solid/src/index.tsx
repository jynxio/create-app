import '@/reset.css';
import '@/index.css';

import App from './App';
import { render } from 'solid-js/web';

const root = document.getElementById('root');

render(() => <App />, root!);
