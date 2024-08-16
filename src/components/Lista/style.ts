import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Produtos/style'

export const Container = styled.section<Omit<Props, 'titulo' | 'item'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'azul' ? cores.azul : cores.verde};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'azul' ? cores.verde : cores.azul};
  }
`

export const ListaDeItem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`
export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
