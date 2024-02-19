const TourCard = (props) => {
  const { img, date, title, description, location, durationDays, price } = props
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {location}
          </p>
          <p>{durationDays} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  )
}

export default TourCard
