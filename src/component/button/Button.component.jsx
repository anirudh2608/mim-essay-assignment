import { forwardRef } from "react"

import { BaseButton ,OtpPopUpButton} from "./button.style"

// Classes for different styled Buttons
export const BUTTON_TYPE_CLASSES = {
    base: "base",
    OtpPopUp: "otp-pop-up"
}

// Default Button type is base button but if we passes the
//  buttonType as a props it returns the respected Button style
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
(
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.OtpPopUp]: OtpPopUpButton,
    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps },ref) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...otherProps} ref={ref}>{children}</CustomButton>
    )
}

// It recives the Ref from the Parent Component
const ButtonForwardRef = forwardRef(Button)

export default ButtonForwardRef   