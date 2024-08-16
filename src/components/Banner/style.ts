import styled from 'styled-components'
import { cores } from '../../styles'

export const ImagemBackground = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    padding-top: 440px;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    background-color: ${cores.branca};
    border-radius: 5px;
    color: ${cores.verde};
  }
`
