import { useState } from "react";
import CheckOTPForm from "components/CheckOTPForm";
import SendOTPForm from "components/templates/SendOTPForm";

function Auth() {
    //step1 => showing SendOTPForm
    //step2 => showing CheckOTPForm
    const [step, setStep] = useState(1);
    const [userMobile, setUserMobile] = useState("");
    const [OTPCode, setOTPCode] = useState("");

  return (
    <>
        {
            step === 1 ?
                <SendOTPForm setStep={setStep} mobile={userMobile} setMobile={setUserMobile} /> :
                <CheckOTPForm setCode={setOTPCode} mobile={userMobile} setStep={setStep} code={OTPCode}  />
        }
    </>
  )
}

export default Auth;