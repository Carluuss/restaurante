import Tag from '../Tag'
import { Card, Descricao, Preco, Titulo } from './style'

type Props = {
  titulo: string
  preco: string
  descricao: string
  avalicao: number
  imagem: string
}

const Produto = ({ titulo, preco, descricao, avalicao, imagem }: Props) => (
  <Card>
    <img src={imagem} alt={titulo} />
    <div className="container">
      <div>
        <Titulo>{titulo}</Titulo>
        <Preco>{preco}</Preco>
        <Descricao>{descricao}</Descricao>
      </div>
      <Tag>{avalicao}</Tag>
    </div>
  </Card>
)

export default Produto
