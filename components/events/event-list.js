import EventItems from "./event-items"
import classes from "./event-list.module.css"

function EventList(data) {
    const { items } = data
    return (
        <ul className={classes.list}>
            {
                items.map(item => (
                    <EventItems
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        location={item.location}
                        date={item.date}
                        image={item.image}
                    />))
            }
        </ul>
    )
}

export default EventList