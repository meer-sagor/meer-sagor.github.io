import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
     fontFamily:{
        'primary': 'Montserrat',
        'secondary': "Titillium Web",
     }
    }
  }
}
