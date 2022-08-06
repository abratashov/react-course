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

### JSX
React.component(...) // old class based approach

export default function Cart({min = 0, max}) { // new functional based approach

```
<div className="some"... onClick ...
CamelCaseComponentName
{name, text} - decomposition
"<>" - fragment / template
```
### React State

hooks in the RAM hash instead of Russian dolls components

let [state, setState] = useState(1);

for different components need the standard state - Redux Toolkit / Mobix


## HW 1

```text
0. Todo: https://webdevskills.com/courses/osnovy-react/start-react-and-jsx/

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
                // or if changed IDs of goods - need to fetch info about these goods
              }, [min, max]); // depended on variables
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
onChange={ cnt => setCnt(pr.id, cnt) } // use closure for call parent function but not good for optimization because it will be re-rendered forever
[...products] // problem of immutability conception - non-changeable data but need to be re-created on update
setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
```

"Ужасы" React. Иммутабельность данных в js. https://www.youtube.com/watch?v=Z7_7xvJ7Cjc

callbacks in vue implemented as $emit

problem of breaking changes in vue 2 => 3

problem of React/Redux is over configuring simple project with complex things

React/Mobix solves Redux immutability complexity problem

## HW 2
```
1. Refine the final example from the lesson.
   - show the total price of all products
   - each item has a remove button (from the cart)
   - the final cost of the order is calculated

2. (*) Make MinMax lazy, call the callback
   onChange not immediately, but on the loss of focus or key enter.
```

# Lesson 3

https://webdevskills.com/catalog

Need to avoid work with sync of inner state and props, best way - using `useRef`

`useRef` - instead of `useState` for directly managing the state of DOM elements

`useEffect` - use when parent's data is changed from props


CSS should be set up in the webpack config - common styles and component (hashed) styles

Modular CSS allows separate styles for every component

React webhooks are similar to mixing in other languages, it substitutes the inheritance

`useEffect` returns a garbage collector function that will be called after removing component

## HW3

Implement hook useClickOutside(el, fn) that close modal window.

# Lesson 4

React children are similar to Vue Slots - passing inner components into the body, but without named Slots

`Bootstrap UI` - for testing and studying

`Material UI` - a good choice for most real UI

Data should be on the top Component and raises the problem of passing data through a chain of components

ReactContext instead of props // allows pass common config for all components (mode, language, etc.)

Ideal Component - without the state, only props

We can stub context and wrap it around the components for testing.

## HW4

```
Refine the source code from the lesson.

Structure to be implemented:

App - the root component that stores the data

   Cart - a basket, in the lesson it was in the App
     Minmax - counter

   OrderForm - form with email, phone and name
     * validation (regexp)
     * error message

     BootstrapModal - (*) optional, modal window asking
       confirm that everything is ok or cancel

   Result screen

(*) Implement a theme selection button: light and dark.
   Pass the selected topic using context.
   Design 1-2 components to choose from in these 2 topics.

Details at the end of the video.
```

