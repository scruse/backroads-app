import TourCard from './TourCard'

import { tours } from '../data'
import Title from './Title'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour, index) => {
          return <TourCard {...tour} key={index} />
        })}
      </div>
    </section>
  )
}

export default Tours
