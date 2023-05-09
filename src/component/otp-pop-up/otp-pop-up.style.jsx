import styled from "styled-components";

export const OtpContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(60,179,113, 0.7);
transition: opacity 500ms;
visibility: visible;
opacity: 1;
`

export const OtpBox = styled.div`
width: 500px;   
height: 350px;
border-radius:5px;
border: 2px solid #A8A8A8;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;

h1 {
    text-align: center;
}

h3 {
    text-align: center;
}
// display: flex;
// flex-direction: column;
// margin: 70px auto;
// padding: 20px;
background: #fff;
// border-radius: 5px;
// width: 30%;
// position: relative;
// transition: all 5s ease-in-out;
// align-items: center;

`

export const Divider = styled.div`
border: 1px solid grey;
`

export const OtpInputsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
`
export const OtpLinksContainer = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin: 20px 0px;
`

export const Links = styled.span`
color: #034694;
cursor: pointer;
font-weight: bold;

&:hover {
    color: #4B9CD3;
  }
`