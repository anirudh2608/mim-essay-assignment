import { useState } from "react";

import styled from "styled-components"

import Button from "./component/button/Button.component";
import OtpPopUp from "./component/otp-pop-up/OtpPopUp.component";

function App() {

  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  // Handles the OTP Pop-Up
  const OtpPopUpHandler = () => {
    setIsPopUpOpen(true)
  }

  return (
    <>
      <PopUpButtonContainer>
        {
          !isPopUpOpen && <Button onClick={OtpPopUpHandler} >Verify OTP</Button>
        }
      </PopUpButtonContainer>

      {
        isPopUpOpen && <OtpPopUp />
      }

    </>
  );
}

export default App;

const PopUpButtonContainer = styled.div`
width: 200px;   
height: 150px;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
`