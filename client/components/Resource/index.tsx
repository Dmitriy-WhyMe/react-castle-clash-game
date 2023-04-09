import { useEffect, useState } from "react"
import Image from "next/image"
import Tooltip from "@mui/material/Tooltip"

type ResourceProps = {
    quantity: number
    extraction: number
    title: string
    imgSrc: string
}

const index: React.FC<ResourceProps> = ({
    quantity,
    extraction,
    title,
    imgSrc
}) => {
    const [resource, setResource] = useState(quantity)

    useEffect(() => {
        const interval = setInterval(() => {
            setResource((a) => Math.round(a + extraction / 3600))
        }, 1000)

        return () => clearInterval(interval)
    }, [resource])

    return (
        <Tooltip title={title}>
            <li>
                <Image src={imgSrc} height={20} width={20} alt="svg" />
                {resource}
            </li>
        </Tooltip>
    )
}

export default index
