import React from 'react';

function ButtonLink(props) {
    //  props => ({ className: "nome_da_classe", href: "/" })
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;