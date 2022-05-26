import { Fragment } from "react";
import { useRouter } from "next/router"

import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"

import { getEventById } from "../../dummy-data"

function EventDetails() {
    const router = useRouter()
    const eventId = router.query.eventsId;

    const event = getEventById(eventId)

    if (!eventId) {
        return <div>Not Page found</div>
    }

    return <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics data={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>
}

export default EventDetails