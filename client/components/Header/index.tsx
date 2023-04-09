import Image from "next/image"
import Resource from "../Resource"
import Tooltip from "@mui/material/Tooltip"
import { mockData } from "./mockData"
import classes from "./Headers.module.scss"

const index = () => {
    return (
        <header className={classes.header}>
            <div className={classes.row}>
                <ul className={classes.resources}>
                    {mockData.resources.map((item) => (
                        <Resource
                            key={item.id}
                            quantity={item.quantity}
                            extraction={item.extraction}
                            title={item.title}
                            imgSrc={item.img}
                        />
                    ))}
                </ul>
                <div className={classes.people}>
                    <ul>
                        <Tooltip title="Всего людей">
                            <li>
                                <Image
                                    src="/svg/people-1.svg"
                                    height={20}
                                    width={20}
                                    alt="svg"
                                />
                                {mockData.people.total}
                            </li>
                        </Tooltip>
                        <Tooltip title="Свободно людей">
                            <li>
                                <Image
                                    src="/svg/people-2.svg"
                                    height={20}
                                    width={20}
                                    alt="svg"
                                />
                                {mockData.people.available}
                            </li>
                        </Tooltip>
                        <Tooltip title="Занято людей">
                            <li>
                                <Image
                                    src="/svg/people-3.svg"
                                    height={20}
                                    width={20}
                                    alt="svg"
                                />
                                {mockData.people.occupied}
                            </li>
                        </Tooltip>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default index
