import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'mountain-meadow': {
                    '50': '#edfcf6',
                    '100': '#d3f8e8',
                    '200': '#aaf0d6',
                    '300': '#73e2c0',
                    '400': '#edfcf6', // dark mode color
                    '500': '#16b38d', // light mode color
                    '600': '#0b9073',
                    '700': '#08745f',
                    '800': '#095c4c',
                    '900': '#094b40',
                    '950': '#042a24',
                },
                neutral: {
                    '500': '#324355',
                }
            },
            fontFamily: {
                'primary': 'Montserrat',
                'secondary': "Titillium Web",
            }
        }
    }
}
