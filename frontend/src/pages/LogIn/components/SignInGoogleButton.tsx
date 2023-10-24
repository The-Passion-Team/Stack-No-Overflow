import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleLogin } from "@react-oauth/google"
import { Flex } from "antd"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { requestLogin } from "~/redux/auth"
import { useAppDispatch } from "~/redux/store"

const SignInGoogleButton = () => {
    const clientId = "1045424845730-1lbobvd4konrgt8rhb5c8d3cakr9tsh3.apps.googleusercontent.com"
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <Flex style={{ width: "100%" }}>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        const decoded: any = jwt_decode(credentialResponse?.credential || "")

                        dispatch(
                            requestLogin({
                                email: decoded.email,
                                mediateLogin: true,
                                navigate,
                            }),
                        )
                    }}
                    onError={() => {
                        console.log("Login Failed")
                    }}
                    width={280}
                    // useOneTap
                />
            </GoogleOAuthProvider>
        </Flex>
    )
}

export default SignInGoogleButton
