
import colors from 'tailwindcss/colors'

module.exports = ({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Tremor module
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[700],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
        boxShadow: {
          // light
          'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          'tremor-card':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          'tremor-dropdown':
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          // dark
          'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          'dark-tremor-card':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          'dark-tremor-dropdown':
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
        borderRadius: {
          'tremor-small': '0.375rem',
          'tremor-default': '0.5rem',
          'tremor-full': '9999px',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'automation-zoom-in': {
          '0%': { transform: 'translateY(-30px) scale(0.2)' },
          '100%': { transform: 'transform: translateY(0px) scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'automation-zoom-in': 'automation-zoom-in 0.5s',
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require('tailwindcss-animate')],
})

function withUt(arg0: {
  darkMode: string[]; content: string[]; theme: {
    container: { center: boolean; padding: string; screens: { '2xl': string } }; extend: {
      colors: {
        tremor: { brand: { faint: "#eff6ff"; muted: "#bfdbfe"; subtle: "#60a5fa"; DEFAULT: "#3b82f6"; emphasis: "#1d4ed8"; inverted: "#fff" }; background: { muted: "#f9fafb"; subtle: "#f3f4f6"; DEFAULT: "#fff"; emphasis: "#374151" }; border: { DEFAULT: "#e5e7eb" }; ring: { DEFAULT: "#e5e7eb" }; content: { subtle: "#9ca3af"; DEFAULT: "#6b7280"; emphasis: "#374151"; strong: "#111827"; inverted: "#fff" } }; 'dark-tremor': { brand: { faint: string; muted: "#172554"; subtle: "#1e40af"; DEFAULT: "#3b82f6"; emphasis: "#60a5fa"; inverted: "#172554" }; background: { muted: string; subtle: "#1f2937"; DEFAULT: "#111827"; emphasis: "#d1d5db" }; border: { DEFAULT: "#374151" }; ring: { DEFAULT: "#1f2937" }; content: { subtle: "#4b5563"; DEFAULT: "#6b7280"; emphasis: "#e5e7eb"; strong: "#f9fafb"; inverted: "#030712" } }; boxShadow: {
          // light
          'tremor-input': string; 'tremor-card': string; 'tremor-dropdown': string
          // dark
          'dark-tremor-input': string; 'dark-tremor-card': string; 'dark-tremor-dropdown': string
        }; borderRadius: { 'tremor-small': string; 'tremor-default': string; 'tremor-full': string }; border: string; input: string; ring: string; background: string; foreground: string; primary: { DEFAULT: string; foreground: string }; secondary: { DEFAULT: string; foreground: string }; destructive: { DEFAULT: string; foreground: string }; muted: { DEFAULT: string; foreground: string }; accent: { DEFAULT: string; foreground: string }; popover: { DEFAULT: string; foreground: string }; card: { DEFAULT: string; foreground: string }
      }; borderRadius: { lg: string; md: string; sm: string }; keyframes: { 'accordion-down': { from: { height: string }; to: { height: string } }; 'accordion-up': { from: { height: string }; to: { height: string } }; 'automation-zoom-in': { '0%': { transform: string }; '100%': { transform: string } } }; animation: { 'accordion-down': string; 'accordion-up': string; 'automation-zoom-in': string }
    }
  }; safelist: ({ pattern: RegExp; variants: string[] } | { pattern: RegExp })[]; plugins: any[]
}): any {
  throw new Error('Function not implemented.')
}
