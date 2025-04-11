# `@paulpladziewicz/design-tokens`

**Version**: 0.0.1  
**Author**: Paul Pladziewicz

## Description

`@paulpladziewicz/design-tokens` is a tool for managing and defining design tokens for your side projects. It simplifies token management by utilizing YAML, enabling seamless integration and customization of design systems. With **Style Dictionary** at its core, this project empowers developers and designers to centralize their design language effectively.

## Features

- **Design Token Management**: Define, structure, and manage your design tokens with clarity.
- **YAML Integration**: Write your tokens in YAML, a human-readable format, for better organization and simplicity.
- **Style Dictionary Support**: Leverage the power of [Style Dictionary](https://amzn.github.io/style-dictionary) for token transformation and export across platforms.
- **Custom Builds**: Fine-tune token configurations to suit your projects.

## Getting Started

### Installation

To install the project locally, use the following command:

```bash
npm install @paulpladziewicz/design-tokens
```

### Prerequisites

Ensure you have the following prerequisites installed before using this project:

- **Node.js** >= 14.x
- **npm** >= 6.x

### Usage

#### Building Design Tokens

To build your design tokens, run the following script:

```bash
npm run build
```

This command uses **Style Dictionary** to generate token output based on the configuration in `sd.config.js`. The `--verbose` flag provides detailed logs during the build process.

#### Customizing Tokens

Tokens are written in YAML files, which makes it easy to:

- Define colors, typography, spacing, and other design elements.
- Create reusable and globally consistent design assets across your applications.

#### Configuration

Update the `sd.config.js` file to customize token settings for your project.
You can define platforms, formats, and file destinations to tailor the output to your needs.

## Dependencies

This project uses the following dependencies:

- **[Style Dictionary](https://www.npmjs.com/package/style-dictionary)**: Framework to manage design tokens across multiple platforms.
- **[YAML](https://www.npmjs.com/package/yaml)**: YAML parser and stringifier for JavaScript.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Author

Created and maintained by **Paul Pladziewicz**.