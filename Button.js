import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
position: relative;
display: inline-flex;
align-item:center;
justify-content: center;
text-align: center;
text-decoration:none;
vertical-align: middle;
cursor: pointer;
user-select:none;
border-radius:0.3rem;
`;

const Button = ({type, className, onclick, children}) => {
    return (
        <ButtonComponent 
        type={type ? type : "button"}
         className={className ?  `btn-components ${className}` : "btn-components"}
            
         onclick = {onclick}
         >

       {children}

    </ButtonComponent>

    );
}

export default Button;