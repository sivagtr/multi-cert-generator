import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { MainUi } from './mainui.jsx';

const root = createRoot(document.body);
root.render(
    <>
        <h1>Hello World</h1>
        <MainUi></MainUi>
    </>);