# MD2Card - Markdown to Knowledge Card Tool

A local web application to convert Markdown documents into beautiful knowledge cards with multiple themes.

## Features

- **Live Markdown Editor**: Real-time preview as you type
- **Multiple Themes**: Light, Dark, and Gradient themes
- **Syntax Highlighting**: Code blocks with syntax highlighting support
- **Image Export**: Export your knowledge cards as PNG images
- **Beautiful Styling**: Professional card design with shadows and modern typography

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or >=22.12.0 recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd md2card-tool
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. Type your Markdown content in the left panel
2. See the live preview in the right panel
3. Select a theme using the theme selector buttons in the header
4. Click "Export Image" to download your card as a PNG file

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **react-markdown** - Markdown rendering
- **react-syntax-highlighter** - Code syntax highlighting
- **html-to-image** - Image export functionality
- **lucide-react** - Icon library

## Project Structure

```
md2card-tool/
├── src/
│   ├── components/
│   │   └── CardPreview.jsx    # Card preview component
│   ├── App.jsx                # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## License

MIT
