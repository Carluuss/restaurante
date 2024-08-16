import { Link } from 'react-router-dom'
import { HeaderBar, HeaderContainer } from './styles'

const Header = () => (
  <HeaderBar>
    <HeaderContainer>
      <h1>
        <Link to={'/'}>Restaurante</Link>
      </h1>
      <Link to={'/cardapio'}>Cardápio</Link>
    </HeaderContainer>
  </HeaderBar>
)

export default Header
