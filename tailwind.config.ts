import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            "bg-main": '#323232',
            "light-blue": "#7dc8fb",
            'bg-header': '#212121',
            "dark-blue": "#042484",
            "cyan-dark": "0689e2",
            'azure': "#035a95",
            "black": '#000',
            "ai": '#2888ff',
            "white": "#fff",
            'border-week-today': '#14FFEC',
            "border-week": "#084C4F",
            "red-reset": "#E4473F",
            "green-reset": "#2D8F38"
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config
