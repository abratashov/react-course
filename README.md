# react-course
Examples of tasks from the React course https://js.dmitrylavrik.ru/react/

# Lesson 1

## WebPack

Webpack 4 - простая сборка проекта
https://www.youtube.com/watch?v=MRlBKfGktwI

Webpack 5 - минимальный переход c 4 версии
https://www.youtube.com/watch?v=Macb16bVj1A

Простая сборка webpack 5 для react
https://www.youtube.com/watch?v=5j19we1xpSA

```
npm install
npm run build

npm run dev
```

JSX
  React.component(...) // old class based approach
  export default function Cart({min = 0, max}) { // new functional based approach
  <div className="some"... onClick ...
  CamelCaseComponentName
  {name, text} - decomposition
  "<>" - fragment / template

React State
  hooks in the RAM hash instead of Russian dolls components
  let [state, setState] = useState(1);
  for different components need the common state - Redux Toolkit / Mobix


## HW 1

```text
0. Tod do: https://webdevskills.com/courses/osnovy-react/start-react-and-jsx/

In this HW, we implement a component that is relevant, for example, for setting the number of products on the cart pages.

1. Make a component that:

- accepts parameters "min" and "max"
- stores in the state the current value of the counter - "current"
- at the beginning of work sets "current = min"
- implements two buttons to increment and decrement "current" by 1
- does not release "current" beyond the boundaries of "min" and "max"
- displays "current" in "span" between buttons


2. Find a way to validate the "min" and "max" parameters.
"propType: min-default max-mandatory"

3(*). Instead of a span between the buttons, it puts "input[type=text]".
The number in this "input" is synchronized with "current".
Remember that a person can enter any textual nonsense into the field.

Details at the end of the "react-1-2" video.
```

