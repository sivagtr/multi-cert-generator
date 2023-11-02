import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { MainUi } from './mainui.jsx';
import CertForm from './CertForm.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <h1>Hello World</h1>
        <MainUi></MainUi>
        <CertForm></CertForm>
    </>);