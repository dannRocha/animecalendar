import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

	* {
	  --_0-color: #FFF0;
	  --_1-color: #000;
	  --_2-color: #a00;
	  --_3-color: #FFF;
	
	  --scroll-color_1: #660000;
	  --scroll-color_2: #a00;
	
	  outline: none;
	  box-sizing: border-box;
	  word-wrap:  break-word;
	  -webkit-user-select: none;  /* Chrome all / Safari all */
	  -moz-user-select: none;     /* Firefox all */
	  -ms-user-select: none;      /* IE 10+ */
	  -o-user-select: none;
	  user-select: none;
	  scrollbar-width: thin;          /* "auto" or "thin"  */
	  scrollbar-color: var(--scroll-color_2) var(--scroll-color_1);
	  
	}


	*::-webkit-scrollbar {
	  width: 5px;
	  color: var(--scroll-color_2);
	}

	*::-webkit-scrollbar-track {
	  background: var(--scroll-color_1);
	}

	*::-webkit-scrollbar-thumb {
	  background-color: #a00;
	  border-radius: 20px;
	}

	
	body {
	
	  background-color: var(--_1-color);
	  margin: 0;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
	    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
	    sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  display: flex;
	  flex: 1;
	}

`
