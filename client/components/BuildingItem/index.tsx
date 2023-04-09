import Tooltip from "@mui/material/Tooltip"
import Image from "next/image"
import classes from "./BuildingItem.module.scss"

type Props = {
    title: string
    handleBuilding: (img: string) => void
    imgSrc: string
}

const index: React.FC<Props> = ({ handleBuilding, title, imgSrc }) => {
    return (
        <Tooltip title={title}>
            <div
                className={classes.item}
                onClick={(e) => handleBuilding(imgSrc)}>
                <Image src={imgSrc} height={100} width={100} alt="img" />
            </div>
        </Tooltip>
    )
}

export default index
