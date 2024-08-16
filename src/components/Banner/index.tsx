import { ImagemBackground } from './style'

import bannerimg from '../../assets/pizza.png'

const Banner = () => (
  <ImagemBackground style={{ backgroundImage: `url(${bannerimg})` }}>
    <div className="container">
      <h1>Restaurante</h1>
    </div>
  </ImagemBackground>
)

export default Banner
