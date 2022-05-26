import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import Button from "../ui/button"
import classes from "./event-items.module.css"

function EventItems(props) {
    const { image, title, date, location, id } = props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
    const formatedEdress = location.replace(", ", "\n")
    const exploreLink = `/events/${id}`
    
    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title} />

            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <adress>{formatedEdress}</adress>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>ExploreEvents</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItems