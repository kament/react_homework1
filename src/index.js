import React from 'react';
import { render } from 'react-dom';
import BlogApp from './blog-app';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
render(<BlogApp />, root);

registerServiceWorker();