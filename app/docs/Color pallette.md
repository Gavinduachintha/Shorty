# Clerk Color Palette

Your current colors:
- **Button / Primary**: `#5D29F0`
- **Background**: `#0D0D0D` (dark)

## Clerk Default Theme (Recommended)

Clerk's default primary color is **#6C47FF** (vibrant purple/indigo).

### Full Dark Mode Palette (Clerk-inspired)

| Role                        | Hex Code     | Description |
|-----------------------------|--------------|-------------|
| `colorPrimary`              | `#6C47FF`    | Primary buttons, accents, links |
| `colorPrimaryForeground`    | `#FFFFFF`    | Text on primary elements |
| `colorBackground`           | `#0D0D0D`    | Main card/page background |
| `colorForeground`           | `#F4F4F5`    | Primary text |
| `colorMutedForeground`      | `#A1A1AA`    | Secondary / muted text |
| `colorMuted`                | `#27272A`    | Subtle backgrounds |
| `colorInput`                | `#18181B`    | Input field background |
| `colorInputForeground`      | `#E4E4E7`    | Input text |
| `colorBorder`               | `#3F3F46`    | Borders and dividers |
| `colorRing`                 | `#6C47FF`    | Focus rings |
| `colorDanger`               | `#EF4444`    | Error / destructive actions |
| `colorSuccess`              | `#22C55E`    | Success states |
| `colorWarning`              | `#F59E0B`    | Warning states |

### Clerk Appearance Config (React/Next.js)

```tsx
appearance={{
  variables: {
    colorPrimary: '#6C47FF',
    colorBackground: '#0D0D0D',
    colorForeground: '#F4F4F5',
    colorMutedForeground: '#A1A1AA',
    colorMuted: '#27272A',
    colorInput: '#18181B',
    colorInputForeground: '#E4E4E7',
    colorBorder: '#3F3F46',
    colorRing: '#6C47FF',
    colorDanger: '#EF4444',
    colorSuccess: '#22C55E',
    colorWarning: '#F59E0B',
  }
}}