import React, { ReactPortal } from 'react';
import Main from '../Main';


function Layout(props: { children: JSX.Element; }) {
    const { children } = props;

    return (
        <>
            {children}
        </>
    );
}

export default Layout;