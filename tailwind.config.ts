
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
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
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
				purple: {
					light: '#9b87f5',
					DEFAULT: '#7E69AB',
					dark: '#1A1F2C',
				},
				gold: '#FFD700',
				neon: {
					blue: '#0EA5E9',
					purple: '#8B5CF6',
					pink: '#D946EF',
					orange: '#F97316',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'text-reveal': {
					'0%': { clipPath: 'inset(0 100% 0 0)' },
					'100%': { clipPath: 'inset(0 0 0 0)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'loading-bar': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'white' }
				},
				'bounce-right': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(5px)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'text-reveal': 'text-reveal 1s cubic-bezier(0.77, 0, 0.18, 1) forwards',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 5s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'loading-bar': 'loading-bar 1.5s ease-in-out',
				'typing': 'typing 3.5s steps(30, end)',
				'blink': 'blink 1s step-end infinite',
				'bounce-right': 'bounce-right 1s ease-in-out infinite',
				'glitch': 'glitch 0.8s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'url("/bg-grid.png")',
				'purple-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, rgba(26, 31, 44, 0) 70%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
