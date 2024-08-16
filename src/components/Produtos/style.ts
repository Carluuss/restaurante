import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const Card = styled.div`
  background-color: ${cores.verde};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${TagContainer} {
    margin-right 8px;

  }

  img {
    height: 217px;
  }

   .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Preco = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branca};
  margin-top: 16px;
  display: block;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
