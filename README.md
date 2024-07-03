# Naive React-like Library

This is a naive implementation of a React-like library designed to manage a virtual DOM, component lifecycle, and state management. 

## Features

- Virtual DOM
- Component-based Architecture
- State Management with `useState`
- Effect Hook with `useEffect`

## Installation

```bash
npm install @rabarbra/ft_react
```

## Usage

### Generate basic app

```bash
./node_modules/@rabarbra/ft_react/scripts/setup_project.js
```

### Basic Example

```javascript
import ftReact from '@rabarbra/ft_react';

function App() {
  const [count, setCount] = ftReact.useState(0);
  return ftReact.createElement(
    'div',
    { style: { textAlign: 'center' } },
    ftReact.createElement('h1', null, 'Hello, World!'),
    ftReact.createElement('p', null, `Count: ${count}`),
    ftReact.createElement('button', { onClick: () => setCount(count + 1) }, 'Increment')
  );
}

const container = document.getElementById('root');
ftReact.render(ftReact.createElement(App, null), container);
```

## API

### `createElement`

Creates a virtual DOM element.

```javascript
const element = ftReact.createElement('div', { id: 'my-div' }, 'Hello, World!');
```

### `render`

Renders a virtual DOM element to the actual DOM.

```javascript
const container = document.getElementById('root');
ftReact.render(element, container);
```

### `useState`

Manages state in a functional component.

```javascript
function Counter() {
  const [count, setCount] = ftReact.useState(0);
  return ftReact.createElement(
    'button',
    { onClick: () => setCount(count + 1) },
    `Count: ${count}`
  );
}
```

### `useEffect`

Performs side effects in a functional component.

```javascript
function Timer() {
  const [time, setTime] = ftReact.useState(0);

  ftReact.useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return ftReact.createElement('div', null, `Time: ${time}`);
}
```

## Examples

### Simple Counter

```javascript
function Counter() {
  const [count, setCount] = ftReact.useState(0);
  return ftReact.createElement(
    'div',
    null,
    ftReact.createElement('p', null, `Count: ${count}`),
    ftReact.createElement('button', { onClick: () => setCount(count + 1) }, 'Increment')
  );
}

const container = document.getElementById('root');
ftReact.render(ftReact.createElement(Counter, null), container);
```

## License

This project is licensed under the MIT License.