import { forwardRef } from "react"

import { InputField } from "./input.style"



const Input = ({...otherprops},ref) =>{
    return (
        <InputField ref={ref} {...otherprops}/>
    )
}
// It recives the Ref from the Parent Component
const ForwardInput = forwardRef(Input)

export default ForwardInput