import Head from "next/head"
import { ReactElement } from "react"
import Header from "../Header"

type LayoutProps = {
    title: string
    keywords?: string
    description?: string
    children: React.ReactNode
}

const index: React.FC<LayoutProps> = ({
    title,
    keywords,
    description,
    children
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                {keywords ? <meta name="keywords" content={keywords} /> : null}
                {description ? (
                    <meta name="description" content={description} />
                ) : null}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <>{children}</>
        </>
    )
}

export default index
