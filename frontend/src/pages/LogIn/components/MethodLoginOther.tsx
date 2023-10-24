import { FacebookOutlined, GithubOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Fragment } from "react"

const handleClickGithub = () => {
    console.log("Github")
}

const handleClickFacebook = () => {
    console.log("Facebook")
}

export const MethodLogin = [
    {
        btn: "Log in with GitHub",
        icon: <GithubOutlined />,
        color: "#fff",
        backgroundColor: "#232629",
        onClick: handleClickGithub,
    },
    {
        btn: "Log in with Facebook",
        icon: <FacebookOutlined />,
        color: "#fff",
        backgroundColor: "#314A86",
        onClick: handleClickFacebook,
    },
]

const MethodLoginOther = () => {
    return (
        <Fragment>
            {MethodLogin.map((item, index) => (
                <Button
                    key={index}
                    children={item.btn}
                    icon={item.icon}
                    style={{
                        color: item.color,
                        backgroundColor: item.backgroundColor,
                        fontSize: 13,
                        height: 40,
                    }}
                    onClick={item.onClick}
                />
            ))}
        </Fragment>
    )
}

export default MethodLoginOther
