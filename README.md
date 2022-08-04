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

# Go to http://localhost:8080/
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

# Lesson 2

Web Hooks extend functions of React framework

React Web Hooks: useState, useEffect, useCallback, useMemo, useReducer, useContext, useRef ...

https://usehooks.com/

```
useState
useEffect // the same as `watch` in Vue, processes outer updating props for refreshing inner state
             useEffect(() => {
                applyCurrent(current);
                // or if changed IDs of goods - need to fetch info about this goods
              }, [min, max]); // depended variables
useCallback // caching of function
useMemo // caching of heavy calculation ~ computed field in Vue
useReducer // complex state in Redux manner, but we can use outer storage
useContext // nice technique for pushing data across levels
useRef // direct access to inputs of DOM elements
```

```
<CompName key={uniqId}> // another way of re-render: key as digest sensitive fields
props - pass data flow from parent to child
callback - pass data flow from child to parent
onChange={ cnt => setCnt(pr.id, cnt) } // use closure for call parent fucntion but not good for optimization because it will be re-rendered forever
[...products] // problem of immutability conception - non changeable data but need to re-create on update
setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
```

"Ужасы" React. Иммутабельность данных в js. https://www.youtube.com/watch?v=Z7_7xvJ7Cjc

callbacks in vue implemented as $emit

problem of breaking changes in vue 2 => 3

problem of React/Redux is overconfiguring simple project with complex things

React/Mobix solves Redux immutability complexity problem

## HW 2
```
1. Refine the final example from the lesson.
   - show total price of all products
   - each item has a remove button (from cart)
   - the final cost of the order is calculated

2. (*) Make MinMax lazy, call callback
   onChange not immediately, but on loss of focus or key enter.
```
