import { sendOTP } from "../../services/auth";

function SendOTPForm({ setMobile, mobile, setStep }) {
    const submitHandler = async (event) => {
        event.preventDefault();

        if (mobile.length < 11) return;

        const { response, error } = await sendOTP(mobile); 
        if (response) setStep(2);//direct to CheckOTPForm
        if (error) console.log(error.response?.data?.message);
    };
    
    return (
        <form onSubmit={submitHandler}>
            <p>ورود به حساب کاربری</p>
            <span>برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد نمایید. کد تایید به این شماره ارسال خواهد شد</span>
            <label htmlFor="input">شماره موبایل خود را وارد نمایید</label>
            <input 
                type="text"
                id="input"
                placeholder="شماره موبایل"
                value={mobile}
                onChange={e => setMobile(e.target.value)}
            />
            <button type="submit">ارسال کد تایید</button>
        </form>
    )
}

export default SendOTPForm;