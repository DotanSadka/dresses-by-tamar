
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Pastel colors palette
                pastel: {
                    pink: {
                        50: '#FFF0F5',
                        100: '#FFE1EC',
                        200: '#FFB6C1',
                        300: '#FFA0B8',
                        400: '#FF85A2',
                        500: '#FF6B8B',
                        600: '#E45A76',
                        700: '#C94D66',
                        800: '#AD3F57',
                        900: '#93354B'
                    },
                    purple: {
                        50: '#F8F0FC',
                        100: '#F3E1FA',
                        200: '#E9CCF6',
                        300: '#D8A9EE',
                        400: '#C785E3',
                        500: '#B366D4',
                        600: '#9F4BC4',
                        700: '#8533AE',
                        800: '#6D2890',
                        900: '#541D71'
                    },
                    blue: {
                        50: '#E6F5FF',
                        100: '#CCE9FF',
                        200: '#99D2FF',
                        300: '#66BBFF',
                        400: '#33A4FF',
                        500: '#007BFF',
                        600: '#0062CC',
                        700: '#004C99',
                        800: '#003366',
                        900: '#001933'
                    },
                    mint: {
                        50: '#EBFBF5',
                        100: '#D7F7EB',
                        200: '#AFF0D6',
                        300: '#87E8C2',
                        400: '#5FDFAD',
                        500: '#37D699',
                        600: '#2CAB7A',
                        700: '#21805C',
                        800: '#17553D',
                        900: '#0C2B1F'
                    },
                    yellow: {
                        50: '#FFFDF0',
                        100: '#FFFBE6',
                        200: '#FFF7CC',
                        300: '#FFF3B3',
                        400: '#FFEF99',
                        500: '#FFEB80',
                        600: '#FFDF33',
                        700: '#E6C700',
                        800: '#CCB000',
                        900: '#997F00'
                    }
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'scale-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.95)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    }
                },
                'slide-in': {
                    '0%': {
                        transform: 'translateX(-20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: '1'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'scale-in': 'scale-in 0.3s ease-out forwards',
                'slide-in': 'slide-in 0.3s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
