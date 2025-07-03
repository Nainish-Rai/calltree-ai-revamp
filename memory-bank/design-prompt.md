Of course. Here is a design system context profile for the Sierra website, presented first as a verbal design prompt and then as a structured JSON object suitable for a development environment using Tailwind CSS.

### Verbal Design System Prompt

**Overall Vibe & Philosophy:**
The design aesthetic is modern, clean, and trustworthy. It projects a sense of calm confidence and technological sophistication without being cold. The core philosophy is "human-centric AI," which is reflected in the soft color palette, approachable typography, and generous use of whitespace. The layout feels open, breathable, and focused, guiding the user's attention to key messages and calls-to-action.

**Color Palette:**
The palette is minimal and sophisticated.

-   **Background:** The primary background is a very light, warm off-white (`#F9F9F7`), creating a soft, airy feel.
-   **Surfaces:** Cards and distinct UI panels use a slightly more defined off-white (`#F4F4F2`) to create subtle depth and separation.
-   **Dark Mode:** A contrasting dark theme uses a deep charcoal color (`#1C1C1C`) for backgrounds, with white text, providing a premium, focused experience in sections like "Safe and secure."
-   **Text:** The main text color is a dark, readable charcoal (`#252525`) instead of a stark black. Subtitles and less prominent text use a softer gray.
-   **Primary Accent:** The brand's identity is carried by a deep, rich forest green (`#006A3A`). This color is used strategically for primary buttons, links, and key brand moments to signify action, trust, and growth.

**Typography:**
A single, clean, geometric sans-serif font family (similar to Inter or Circular) is used throughout to maintain consistency and readability.

-   **Headings:** Headings are large, impactful, and set in a bold weight. They have a slightly tight letter spacing (`tracking-tight`) for a polished, modern look. The main hero heading is especially prominent.
-   **Body Copy:** Paragraph text is set at a comfortable, readable size with a regular font weight and generous line height, ensuring long-form content is easy to digest.
-   **Hierarchy:** A clear typographic scale distinguishes between main headings, section titles, body text, and smaller captions or labels.

**Layout & Spacing:**
The layout is built on a foundation of generous whitespace and a consistent spacing scale.

-   **Grid:** Content is organized within a centered, max-width container to maintain focus and readability on wider screens. Multi-column grids (two, three, and four columns) are used to present features, customer stories, and footer links in an orderly fashion.
-   **Spacing:** Consistent and ample padding is applied to all sections and within components like cards and buttons, preventing any sense of clutter.

**Components & Interactivity:**

-   **Buttons:** Buttons are a key interactive element. The primary style is a solid green fill with white text for high-priority actions ("Learn More"). The secondary style is an outlined button with a green border and text, used for top-level navigation ("Get Started") and less-urgent calls-to-action. Both feature fully rounded corners on one side and less on the other or a pill-shape, giving them a distinct, modern feel.
-   **Cards:** Cards are used to segment information. They have soft, rounded corners, a subtle background color difference, and sometimes a very faint border or shadow to lift them from the page.
-   **Interactive Demos:** The large, pill-shaped chat prompt ("Can you help me find a room with a view?") is a central visual motif, immediately communicating the product's conversational nature. It's clean, with a light border and an iconic "send" arrow.

---

### JSON Design System Context Profile

```json
{
    "name": "Sierra Website Design System",
    "description": "A design system for recreating the Sierra website, focusing on a clean, modern, and trustworthy aesthetic. This profile is optimized for use with Tailwind CSS.",
    "colors": {
        "comment": "Color palette designed for clarity and brand identity.",
        "background": "#F9F9F7",
        "surface": "#F4F4F2",
        "background-dark": "#1C1C1C",
        "primary": "#006A3A",
        "border": "#E5E5E3",
        "text": {
            "primary": "#252525",
            "secondary": "#575757",
            "inverse": "#FFFFFF",
            "primary-accent": "#006A3A"
        }
    },
    "typography": {
        "comment": "Uses a single geometric sans-serif font family like 'Inter'.",
        "fontFamily": {
            "sans": ["Inter", "sans-serif"]
        },
        "styles": {
            "heading1": {
                "comment": "e.g., 'Better customer experiences.'",
                "fontSize": "4.5rem",
                "fontWeight": "700",
                "lineHeight": "1.1",
                "letterSpacing": "-0.025em"
            },
            "heading2": {
                "comment": "e.g., 'See what Sierra can do for you.'",
                "fontSize": "3.75rem",
                "fontWeight": "700",
                "lineHeight": "1.2",
                "letterSpacing": "-0.025em"
            },
            "heading3": {
                "comment": "e.g., 'The results speak for themselves'",
                "fontSize": "2.25rem",
                "fontWeight": "600",
                "lineHeight": "1.3"
            },
            "body": {
                "comment": "Standard paragraph text.",
                "fontSize": "1rem",
                "fontWeight": "400",
                "lineHeight": "1.75"
            },
            "subtitle": {
                "comment": "Slightly larger supporting text under headings.",
                "fontSize": "1.25rem",
                "fontWeight": "400",
                "lineHeight": "1.6"
            },
            "button": {
                "fontSize": "1rem",
                "fontWeight": "500"
            },
            "caption": {
                "fontSize": "0.875rem",
                "fontWeight": "400"
            }
        }
    },
    "spacing": {
        "comment": "Core spacing unit is 0.25rem. This follows a standard Tailwind-like scale.",
        "xs": "0.5rem",
        "sm": "0.75rem",
        "md": "1rem",
        "lg": "1.5rem",
        "xl": "2.5rem",
        "xxl": "4rem",
        "section": "8rem"
    },
    "borderRadius": {
        "comment": "Consistent border radius for a soft and modern feel.",
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
    },
    "boxShadow": {
        "comment": "Subtle shadows for cards and elevated elements.",
        "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
    },
    "components": {
        "button": {
            "primary": {
                "backgroundColor": "colors.primary",
                "textColor": "colors.text.inverse",
                "padding": "0.75rem 1.5rem",
                "borderRadius": "borderRadius.full"
            },
            "secondary": {
                "backgroundColor": "transparent",
                "textColor": "colors.primary",
                "border": "1px solid colors.primary",
                "padding": "0.75rem 1.5rem",
                "borderRadius": "borderRadius.full"
            },
            "headerAction": {
                "backgroundColor": "transparent",
                "textColor": "colors.text.primary",
                "border": "1px solid colors.border",
                "padding": "0.5rem 1rem",
                "borderRadius": "borderRadius.full"
            }
        },
        "card": {
            "backgroundColor": "colors.surface",
            "borderRadius": "borderRadius.xl",
            "padding": "spacing.xl",
            "border": "1px solid colors.border"
        },
        "input": {
            "comment": "Styling for the large demo chat input.",
            "backgroundColor": "transparent",
            "border": "1px solid colors.border",
            "borderRadius": "borderRadius.full",
            "padding": "1rem 2rem",
            "fontSize": "typography.styles.subtitle.fontSize",
            "textColor": "colors.text.secondary"
        }
    }
}
```
