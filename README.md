# Angular Flash Card

A modern, interactive flash card application built with Angular 21 for language learning and vocabulary practice. This application helps users memorize words through two modes: study mode with flip cards and test mode with multiple-choice questions.

## Features

- 📚 **Study Mode**: Interactive flip cards to review vocabulary
- 📝 **Test Mode**: Multiple-choice questions to assess your knowledge
- 📊 **Progress Tracking**: View statistics on your learning progress
- 🎨 **Modern UI**: Clean and responsive design with TailwindCSS
- 🔄 **Dynamic Content**: Load custom word lists
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Framework**: Angular 21.0.0
- **Styling**: TailwindCSS 4.1.12
- **Language**: TypeScript 5.9.2
- **Testing**: Vitest 4.0.8
- **Build Tool**: Angular CLI 21.0.5

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher recommended)
- npm 10.9.2 or higher
- Angular CLI 21.0.5

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vietanhdang/angular-flash-card.git
cd angular-flash-card
```

2. Install dependencies:

```bash
npm install
```

## Development

To start a local development server:

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/`. The app will automatically reload when you make changes to the source files.

## Building

To build the project for production:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory, optimized for performance and speed.

## Testing

To execute unit tests with Vitest:

```bash
npm test
# or
ng test
```

## Code Quality

- **Linting**: Run ESLint to check code quality

```bash
npm run lint
```

- **Auto-fix linting issues**:

```bash
npm run lint:fix
```

- **Format code**: Format code with Prettier

```bash
npm run format
```

## Project Structure

```
angular-flash-card/
├── src/
│   ├── app/
│   │   ├── layouts/          # Header and footer components
│   │   ├── pages/            # Main pages
│   │   │   └── home/         # Home page with study/test modes
│   │   │       └── components/
│   │   │           ├── controls/      # Navigation controls
│   │   │           ├── flashcard/     # Flip card component
│   │   │           ├── mode-toggle/   # Switch between modes
│   │   │           ├── stats/         # Progress statistics
│   │   │           ├── test-question/ # Multiple choice questions
│   │   │           ├── test-results/  # Test score display
│   │   │           └── test-setup/    # Test configuration
│   │   ├── models/           # Data models
│   │   ├── services/         # Business logic services
│   │   └── assets/           # Static assets and data files
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

1. **Study Mode**:
   - Click on flash cards to flip and reveal definitions
   - Navigate through cards using Previous/Next buttons
   - Track your progress with the statistics panel

2. **Test Mode**:
   - Configure test settings (number of questions)
   - Answer multiple-choice questions
   - View your score and review results

## Customization

To add your own word list, modify the `src/app/assets/sample_flashcards.json` file:

```json
[
  {
    "word": "example"
  },
  {
    "word": "vocabulary"
  }
]
```

## Code Scaffolding

To generate a new component:

```bash
ng generate component component-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Viet Anh Dang**

- GitHub: [@vietanhdang](https://github.com/vietanhdang)

## Acknowledgments

- Built with [Angular CLI](https://angular.dev/tools/cli)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Tested with [Vitest](https://vitest.dev/)

## Support

If you find this project helpful, please give it a ⭐ on GitHub!
