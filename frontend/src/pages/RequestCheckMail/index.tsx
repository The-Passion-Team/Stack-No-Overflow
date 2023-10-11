import { Result } from "antd"
import { AuthState } from "~/redux/auth"

export const RequestCheckMail = ({emailConfirm}: AuthState) => {
    // const email = new URLSearchParams(window.location.search).get("email") || "havanduoc@gmail.com"

    return (
        <Result
            style={{
                width: 700,
                margin: "0 auto",
            }}
            status="success"
            title={`Registration email sent to ${emailConfirm}. Open this email to finish signup.`}
            subTitle="If you don't see this email in your inbox within 15 minutes look for at in your junk mail folder. If you find it theme mark the email at 'Not junk'."
        />
    )
}
