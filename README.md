# `@paulpladziewicz/design-tokens`

**Version**: 0.0.1  
**Author**: Paul Pladziewicz

## Description

A set of design tokens for your side projects.
If you want to extend them or customize them to your needs,
you can fork or clone this [repository](https://github.com/paulpladziewicz/design-tokens).

## Getting Started

### Installation

To install the package, use the following command:

```bash
npm install @paulpladziewicz/design-tokens
```

### Usage

After installing the package, you can import the generated design tokens based on your preferred styling approach:

##### SCSS (Recommended for Angular, Sass-based projects)
```scss
@use '@paulpladziewicz/design-tokens/dist/variables' as *;
```
This makes all the Sass variables available in your stylesheet. You can also alias the import if needed.

#### CSS (For plain CSS or tools that support CSS custom properties)
```css
@import '@paulpladziewicz/design-tokens/dist/variables.css';
```
This will bring in all available custom properties (e.g., --color-primary, --font-size-base) for use directly in your CSS.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Author

Created and maintained by **Paul Pladziewicz**.