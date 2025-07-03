import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            rotate: {
                '-180': '-180deg',
                '180': '180deg',
            },
            transitionDuration: {
                '750': '750ms',
            },
            perspective: {
                '1000': '1000px',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
                sage: {
                    '50': '#f3f7f5',
                    '100': '#e7f0eb',
                    '200': '#c4e0d1',
                    '300': '#88c6a3',
                    '400': '#6bb389',
                    '500': '#4e9970',
                    '600': '#3d7b59',
                    '700': '#2a593f',
                    '800': '#244832',
                    '900': '#1d3728',
                },
                sand: {
                    '50': '#fdfcfa',
                    '100': '#f8f5ef',
                    '200': '#ece4d4',
                    '300': '#e0d4be',
                    '400': '#d8d4b4',
                    '500': '#c9c4a0',
                    '600': '#b5b089',
                    '700': '#959071',
                    '800': '#77735c',
                    '900': '#615e4c',
                },
                forest: {
                    '50': '#f5f7f6',
                    '100': '#e9ecea',
                    '200': '#689e80',
                    '300': '#5c8b71',
                    '400': '#4f7861',
                    '500': '#436552',
                    '600': '#525b54',
                    '700': '#3a4240',
                    '800': '#2e3432',
                    '900': '#252a29',
                },
                tremor: {
                    brand: {
                        faint: '#f5f7f6', // forest-50
                        muted: '#e9ecea', // forest-100
                        subtle: '#689e80', // forest-200
                        DEFAULT: '#5c8b71', // forest-300
                        emphasis: '#4f7861', // forest-400
                        inverted: '#ffffff',
                    },
                    background: {
                        muted: '#f5f7f6', // forest-50
                        subtle: '#e9ecea', // forest-100
                        DEFAULT: '#ffffff',
                        emphasis: '#4f7861', // forest-400
                    },
                    border: {
                        DEFAULT: '#e9ecea', // forest-100
                    },
                    ring: {
                        DEFAULT: '#e9ecea', // forest-100
                    },
                    content: {
                        subtle: '#689e80', // forest-200
                        DEFAULT: '#5c8b71', // forest-300
                        emphasis: '#4f7861', // forest-400
                        strong: '#436552', // forest-500
                        inverted: '#ffffff',
                    },
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    safelist: [
        {
            pattern: /^(bg-(?:forest|sage|sand)-(?:50|100|200|300|400|500|600|700|800|900))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(text-(?:forest|sage|sand)-(?:50|100|200|300|400|500|600|700|800|900))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(border-(?:forest|sage|sand)-(?:50|100|200|300|400|500|600|700|800|900))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(ring-(?:forest|sage|sand)-(?:50|100|200|300|400|500|600|700|800|900))$/,
        },
        {
            pattern: /^(stroke-(?:forest|sage|sand)-(?:50|100|200|300|400|500|600|700|800|900))$/,
        },
        {
            pattern: /^(fill-(?:forest|sage|sand)-(?:50|100|200|300|400|500|600|700|800|900))$/,
        },
        {
            pattern: /^(bg-tremor-brand-(?:faint|muted|subtle|DEFAULT|emphasis))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(text-tremor-brand-(?:faint|muted|subtle|DEFAULT|emphasis))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(border-tremor-brand-(?:faint|muted|subtle|DEFAULT|emphasis))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(ring-tremor-brand-(?:faint|muted|subtle|DEFAULT|emphasis))$/,
        },
        {
            pattern: /^(stroke-tremor-brand-(?:faint|muted|subtle|DEFAULT|emphasis))$/,
        },
        {
            pattern: /^(fill-tremor-brand-(?:faint|muted|subtle|DEFAULT|emphasis))$/,
        },
    ],
    plugins: [require('tailwindcss-animate')],
};
export default config;
