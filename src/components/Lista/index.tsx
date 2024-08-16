import Item from '../../models/Item'
import Produto from '../Produtos'
import { Container, ListaDeItem, Titulo } from './style'

export type Props = {
  titulo: string
  background: 'azul' | 'verde'
  item: Item[]
}

const Lista = ({ background, titulo, item }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{titulo}</Titulo>
      <ListaDeItem>
        {item.map((item) => (
          <Produto
            key={item.id}
            titulo={item.titulo}
            preco={item.preco}
            descricao={item.descricao}
            avalicao={item.avaliacao}
            imagem={item.imagem}
          />
        ))}
      </ListaDeItem>
    </div>
  </Container>
)
export default Lista
