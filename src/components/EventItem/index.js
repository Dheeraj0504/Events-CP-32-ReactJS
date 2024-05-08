// Write your code here
import './index.css'

const EventItem = props => {
  // console.log(props)
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  return (
    <li className="event-item">
      <button className="event-button" type="button" onClick={onClickEvent}>
        <img className={eventImageClassName} src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
