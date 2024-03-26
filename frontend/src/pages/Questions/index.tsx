import { Space, Typography } from "antd"
import React from "react"
import { useSelector } from "react-redux"
import { selectorPosts } from "~/redux/posts/containers"
import { Col, Row } from "antd"
import SideBar from "../Home/components/Sidebar"
import MainBar from "../Home/components/Mainbar"
import "../Home/styles/home.scss"
import HeaderContent from "../Home/components/Mainbar/components/HeaderContent"

const styles = {
    fontSize: 23,
}

export function Questions() {
    const Posts = useSelector(selectorPosts)?.posts

    return (
        <>
            <Row wrap={false} gutter={20} className="snoHome">
                <Col flex="auto" className="mainbar">
                    <MainBar
                        HeaderMain={
                            <HeaderContent
                                titleCnt={"All Questions"}
                                children={<Typography.Text style={styles}>{Posts?.length} questions</Typography.Text>}
                            />
                        }
                    />
                </Col>

                <Col flex="none" className="sidebar">
                    <SideBar />
                </Col>
            </Row>
            {/* <Space>Questions Page</Space>
            <Space>{Posts?.length}</Space> */}
        </>
    )
}
