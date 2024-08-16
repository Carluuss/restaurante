class Item {
  titulo: string
  preco: string
  descricao: string
  avaliacao: number
  id: number
  imagem: string

  constructor(
    titulo: string,
    preco: string,
    descricao: string,
    avaliacao: number,
    id: number,
    imagem: string
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.avaliacao = avaliacao
    this.preco = preco
    this.id = id
    this.imagem = imagem
  }
}

export default Item
