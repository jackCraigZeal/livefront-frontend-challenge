# React Lessons

- Component names start with capital letters
- Components can only return parent element; wrap multiple in an empty element. `<>YOUR_ELEMENTS_HERE</>`
- JSX is used instead of HTML
- `{}` are used to escape back to JavaScript, and replace quotation marks when used in element parameters. 
    - You CAN'T use an `if` statement within this, but you CAN use `.. ? .. : ..`
- JSX uses curly braces for style: `<div style={display:block;}></div>`
- You can set variables to html elements: `let content = <MyComponent></MyComponent>`
- Use States in components.
    `const [myVar, setMyVar] = useState(initialValue);`
    `setMyVar(newValue);`
    - State changes trigger re-renders
    - States persist across re-renders
    - Concurrent state updates
    - Encapsulated variable handling
    - Each instance of a component maintains its own state.
- React functions of the form `use___();` are called Hooks.
    - Hooks get initialized at the start of a component.
    