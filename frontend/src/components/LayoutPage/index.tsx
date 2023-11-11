import React from "react"
import { Flex } from "antd"

interface IFeeder {
    headerContent?: React.ReactNode
    mainContent: React.ReactNode
    sideContent?: React.ReactNode
}

const LayoutPage = ({
    headerContent = <React.Fragment />,
    mainContent,
    sideContent = <React.Fragment />,
}: IFeeder) => {
    return (
        <Flex vertical gap="large" className="snoHome">
            {headerContent}

            <Flex gap="large">
                <Flex vertical className="mainbar" flex={1}>
                    {mainContent}
                </Flex>

                {sideContent}
            </Flex>
        </Flex>
    )
}

export default LayoutPage
