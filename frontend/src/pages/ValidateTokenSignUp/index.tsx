import { Flex, Typography } from "antd"
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { activationEmail } from "~/redux/auth"
import { useAppDispatch } from "~/redux/store"
import { PF } from "~/utils/variables"
import Link from "antd/es/typography/Link"

export const ValidateTokenSignUp = () => {
    const dispatch = useAppDispatch()
    const { activationToken = "" } = useParams()
    const [expired, setExpired] = useState<Boolean>(false) // Expire of Token

    useEffect(() => {
        const f = async () => {
            const result = await dispatch(activationEmail({ activationToken }))
            if (result?.payload?.name === "TokenExpiredError") setExpired(true)
        }

        f()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Fragment>{expired ? <Expired /> : <Activated />}</Fragment>
}

const Activated = () => {
    return (
        <Flex
            vertical
            gap="small"
            style={{
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 5,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <img src={PF + "/assets/verify-mail.png"} alt="" style={{ width: "300px" }} />
            <Typography
                style={{
                    fontSize: 30,
                    marginBottom: 3,
                }}
            >
                Email activation successful!
            </Typography>
            <Typography style={{ fontSize: 22, color: "#888", lineHeight: "30px" }}>
                Welcome to Stack No Overflow
            </Typography>
            {/* <Typography style={{ fontSize: 20, color: "#888", lineHeight: "30px" }}>
                Hãy thỏa sức mua sắm cùng Tech!
            </Typography> */}

            <Link
                href="/login"
                style={{
                    display: "flex",
                    width: 250,
                    height: 60,
                    backgroundColor: "dodgerblue",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: 28,
                    margin: 20,
                    cursor: "pointer",
                    borderRadius: 2,
                    transition: "all .3s ease",

                    // ":hover": {
                    //     backgroundColor: "#1376d7",
                    // },
                }}
            >
                Login Now
            </Link>
        </Flex>
    )
}

const Expired = () => {
    return (
        <Flex
            vertical
            gap="small"
            align="center"
            justify="center"
            style={{
                width: "70%",
                backgroundColor: "#fff",
                padding: 15,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <img src={PF + "/assets/spam.png"} alt="" style={{ width: 200 }} />
            <Typography
                style={{
                    fontSize: 30,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                Confirmation mail has expired!
            </Typography>
            <Typography style={{ fontSize: 22, color: "#888", lineHeight: "30px" }}>
                Please try again!
            </Typography>
        </Flex>
    )
}
