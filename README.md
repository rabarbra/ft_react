Here is the updated documentation with examples transformed to JSX syntax:

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
# Start development server
npm start
# Create production build
npm build
```

### Basic Example

```jsx
import ftReact from '@rabarbra/ft_react';

function App() {
  const [count, setCount] = ftReact.useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello, World!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const container = document.getElementById('root');
ftReact.render(<App />, container);
```

## API

### `createElement`

Creates a virtual DOM element.

```jsx
const element = <div id="my-div">Hello, World!</div>;
```

### `render`

Renders a virtual DOM element to the actual DOM.

```jsx
const container = document.getElementById('root');
ftReact.render(element, container);
```

### `useState`

Manages state in a functional component.

```jsx
function Counter() {
  const [count, setCount] = ftReact.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### `useEffect`

Performs side effects in a functional component.

```jsx
function Timer() {
  const [time, setTime] = ftReact.useState(0);

  ftReact.useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return <div>Time: {time}</div>;
}
```

## Examples

### Simple Counter

```jsx
function Counter() {
  const [count, setCount] = ftReact.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const container = document.getElementById('root');
ftReact.render(<Counter />, container);
```

## License

This project is licensed under the MIT License.