import { Button, Input, Row, Typography } from "antd"
import React from "react"

const style1: React.CSSProperties = {
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "100%",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.1)",
}

const Title = () => {
    return (
        <Row style={style1}>
            <Typography style={{ fontWeight: 500 }}>Title</Typography>
            <Typography style={{ marginBottom: 10 }}>
                Be specific and imagine you’re asking a question to another person.
            </Typography>
            <Input
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                style={{ marginBottom: 10 }}
            />
            <Button type="primary" style={{ width: "100px" }}>
                Next
            </Button>
        </Row>
    )
}

export default Title
