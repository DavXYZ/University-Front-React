import { connect } from "react-redux"
import { forgetPassword, verifyCodePassword } from "../../../redux/reducers/authUserReducer"
import ForgotPassword from "./ForgotPassword"
import { useState } from "react"

const ForgotPasswordContainer = (props) => {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <ForgotPassword
      {...props}
      submitted={submitted}
      setSubmitted={setSubmitted}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      forgetPassword={props.forgetPassword}
      verifyCodePassword={props.verifyCodePassword}
    />
  )
}




export default connect(null,{forgetPassword,verifyCodePassword})(ForgotPasswordContainer)
