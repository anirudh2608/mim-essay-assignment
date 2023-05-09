import styled from "styled-components";

export const BaseButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: #018749;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
  background-color: #3CB371;
  color: black;
  border: 1px solid black;
}
`

export const OtpPopUpButton = styled(BaseButton)`
width: 60%;
border-radius:25px;
margin-bottom: 20px;

:disabled {
  opacity: 0.7;

  :hover {
    background-color: #018749;
    color: white;
    border: none;
    cursor: auto  ;
  }

}

&:focus {
  background-color: #3CB371;
  color: black;
  border: 1px solid black;
}

`