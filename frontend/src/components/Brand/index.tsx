import Typography from "antd/es/typography/Typography"
import "./styles.scss"

export function Brand() {
    return (
        <Typography
            style={{ marginLeft: 8, fontSize: 24, fontFamily: "'Ubuntu', sans-serif" }}
            className="snoBrand"
        >
            Stack No <span style={{ color: "#FF914D" }}>Overflow</span>
        </Typography>
    )
}
