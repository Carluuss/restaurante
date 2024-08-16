import Lista from '../../components/Lista'

import sushi from '../../assets/sushi.png'
import massa from '../../assets/massa.png'
import pizza from '../../assets/pizza.png'
import Item from '../../models/Item'

const cardapio: Item[] = [
  {
    id: 4,
    titulo: 'Sushi',
    preco: 'R$ 39,90',
    imagem: sushi,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 5,
    titulo: 'Sushi',
    preco: 'R$ 8,90',
    imagem: massa,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 6,
    titulo: 'Sushi',
    preco: 'R$ 39,90',
    imagem: pizza,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 7,
    titulo: 'Sushi',
    preco: 'R$ 39,90',
    imagem: sushi,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 8,
    titulo: 'Sushi',
    preco: 'R$ 8,90',
    imagem: massa,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 9,
    titulo: 'Sushi',
    preco: 'R$ 39,90',
    imagem: pizza,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 10,
    titulo: 'Sushi',
    preco: 'R$ 39,90',
    imagem: sushi,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  },
  {
    id: 11,
    titulo: 'Sushi',
    preco: 'R$ 8,90',
    imagem: massa,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adip',
    avaliacao: 4.6
  }
]

const Cardapio = () => (
  <>
    <Lista item={cardapio} titulo="Destaques" background="verde" />
  </>
)

export default Cardapio
