import { useState } from "react"
import Modal from "@mui/material/Modal"
import Image from "next/image"
import classes from "./ConstructionCell.module.scss"
import BuildingItem from "../BuildingItem"

type Props = {
    number: number
}

const index: React.FC<Props> = ({ number }) => {
    const [open, setOpen] = useState(false)
    const modalOpen = () => setOpen(true)
    const modalClose = () => setOpen(false)

    const [showBuilding, setShowBuilding] = useState(false)
    const [buildingImg, setBuildingImg] = useState("")
    const handleBuilding = (img: string) => {
        setShowBuilding(true)
        setOpen(false)
        setBuildingImg(img)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={modalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className={classes.modalBox}>
                    <BuildingItem
                        handleBuilding={handleBuilding}
                        title="Добывает дерево 30/час"
                        imgSrc="/buildings/wood-building.png"
                    />
                    <BuildingItem
                        handleBuilding={handleBuilding}
                        title="Добывает камень 50/час"
                        imgSrc="/buildings/stone-2.png"
                    />
                </div>
            </Modal>

            <div
                className={
                    number === 32 ||
                    number === 24 ||
                    number === 25 ||
                    number === 17 ||
                    showBuilding
                        ? `${classes.cellLocked} ${classes.cell}`
                        : classes.cell
                }
                onClick={modalOpen}>
                <div className={classes.number}>{number}</div>
                <div className={classes.building}>
                    {showBuilding ? (
                        <Image
                            src={buildingImg}
                            height={100}
                            width={100}
                            alt="img"
                        />
                    ) : null}
                </div>
                <div className={classes.texture}>
                    <Image
                        src="/texture-cell-2.jpg"
                        height={100}
                        width={100}
                        alt="img"
                    />
                </div>
                <div className={classes.substrate}></div>
            </div>
        </>
    )
}

export default index
