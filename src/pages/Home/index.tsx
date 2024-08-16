import Banner from '../../components/Banner'
import Lista from '../../components/Lista'

import sushi from '../../assets/sushi.png'
import massa from '../../assets/massa.png'
import pizza from '../../assets/pizza.png'
import Item from '../../models/Item'

const cardapio: Item[] = [
  {
    id: 1,
    titulo: 'Sushi',
    preco: 'R$ 39,90',
    imagem: sushi,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 2,
    titulo: 'Sushi',
    preco: 'R$ 8,90',
    imagem: massa,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 3,
    titulo: 'Sushi',
    preco: 'R$ 39,90',
    imagem: pizza,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  }
]

const Home = () => (
  <>
    <Banner />
    <Lista item={cardapio} titulo="Destaque" background="azul" />
    <Lista item={cardapio} titulo="Cardápio" background="verde" />
  </>
)

export default Home
