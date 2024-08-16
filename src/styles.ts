import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  azul: '#1B1464',
  vermelho: '#EA2027',
  verde: '#006266'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;

}

body {
background-color: ${cores.azul};
color: ${cores.branca};
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
