import { useEffect, useRef, useState } from "react";
import OtpInput from "../input/Input.component"
import { Divider, Links, OtpContainer, OtpInputsContainer, OtpLinksContainer, OtpBox } from "./otp-pop-up.style";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component";

const OtpPopUp = () => {

    //  if we have to store the OTP from inputs we can use setOtp
    const [otp, setOtp] = useState(new Array(6).fill(''))
    // this is use to disable and enable the verify Button
    const [isButtonEnabled, setIsButtonEnabled] = useState(true)

    // initializing Ref for Inputs
    const inputRef = useRef([])
    // initializing Ref for Verify Button
    const buttonRef = useRef()

    // Checks is there is any input empty
    const checkOtpInputsValue = async () => {
        let isInputsEmpty = true;
        inputRef.current.map((element) => {
            if (element.value === '') isInputsEmpty = false
            return isInputsEmpty
        })
        // It enables the Verify Button until all the inputs are filled
        if (isInputsEmpty) {
            await setIsButtonEnabled(false)
            buttonRef.current.focus()
        } else {
            await setIsButtonEnabled(true)
        }
    }

    // It handles the input values which enters one by one
    const otpHandle = (element) => {
        if (isNaN(element.value)) return element.value = "";

        checkOtpInputsValue()

        if (element.nextSibling) {
            element.nextSibling.focus();
        }

    }

    // It handles the input values which pasted from clipboard
    const otpPasteHandler = (event) => {
        if (event.target.localName !== 'input') return
        event.preventDefault();
        let pasteOtp = (event.clipboardData || window.clipboardData).getData("text")
        if (isNaN(pasteOtp)) return pasteOtp = "";
        for (let i = 0; i < pasteOtp.length; i++) {
            if (inputRef.current[i]) {
                inputRef.current[i].value = pasteOtp[i]
                inputRef.current[i].focus()
            }
        }
        checkOtpInputsValue()
    }

    // It handles the Backspace and Arrors functionality
    const otpKeyHandler = (element) => {
        const { keyCode } = element
        switch (keyCode) {

            case 37:
                if (element.target.previousSibling)
                    element.target.previousSibling.focus();
                break;
            case 39:
                if (element.target.nextSibling)
                    element.target.nextSibling.focus();
                break;
            case 8:
                element.preventDefault();
                if (element.target.previousSibling) {
                    element.target.value = ""
                    element.target.previousSibling.focus();
                } else {
                    element.target.value = ""
                }
                break;

            default:
                console.log("Invalid Case")
        }
        checkOtpInputsValue()
    }

    useEffect(() => {
        // Focus the first input at the time of render the component
        inputRef.current[0].focus();
    }, [])

    return (
        <OtpContainer>
            <OtpBox>
                <h1>Phone Verification</h1>
                <Divider />
                <h3>Enter the OTP you received on 89206-6XXXX</h3>
                <OtpInputsContainer>
                    <div>
                        {
                            otp.map((_, index) => (
                                <OtpInput
                                    ref={elment => (inputRef.current[index] = elment)}
                                    type="text"
                                    key={index}
                                    maxLength="1"
                                    onChange={(event) => otpHandle(event.target)}
                                    onKeyDown={(event) => otpKeyHandler(event)}
                                    onPaste={(event) => otpPasteHandler(event)}
                                />
                            ))
                        }
                    </div>

                    <OtpLinksContainer>
                        <Links>Change Number</Links>
                        <Links>Re-send OTP</Links>
                    </OtpLinksContainer>

                    <Button buttonType={BUTTON_TYPE_CLASSES.OtpPopUp} disabled={isButtonEnabled} ref={buttonRef} >Verify Phone Number</Button>
                </OtpInputsContainer>
            </OtpBox>
        </OtpContainer>

    )
}

export default OtpPopUp 