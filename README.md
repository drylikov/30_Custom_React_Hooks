# 30 Custom React Hooks 
These are the 30 custom react hooks covered in the Web Dev Simplified course. [Free course on react hooks](https://courses.webdevsimplified.com/react-hooks-simplified)

## 1. useToggle
This hooks takes in an initial value that is a boolean, and returns the boolean and a simple method for toggling the boolean from **true** to **false** and vice versa.
```js
const [value, toggle] = useToggle(false)
```

## 2. useTimeout.
This is a hook that takes in a callback and a delay. It calls the callback after the delay has passed. It also returns a clear and a reset method. The clear method allows you to clear the timeout and not call the callback. The reset just resets the timeout to 0.
```js
const { clear, reset } = useTimeout(() => ("Callback called!"), 1000);
```

## 3. useDebounce
This is a hook like useEffect, but it calles a useEffect after the delay has passed
``` js
useDebounce(() => alert("Callback called!"), 1000, [dependencies])
```

## 4. useUpdateEffect
This is a useEffect that does not get called on the initial render. Make sure to turn off **React.StrictMode** when using.
```
useUpdateEffect(() => alert("Callback called!"), [dependencies])
```

## 5. useArray 
This hook makes working with arrays in react easier. You pass it the initial array and it return many methods for managing it's state.
``` js
const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])
```

## 6. usePrevious 
This is hook that you pass a state and it returns its pervious state.
```js
const [count, setCount] = useState(0)
const previousCount = usePrevious(count)
```

## 7. useStateWithHistory
This is a hook that works like useState, but it also returns an object with the history of the state, a pointer pointing to a value in the history and a forward, back, and go method, that increment, decrement, and go to an index in the history.
``` js
const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1)
```

## 8. useStorage
This is a hook that allows you use local storage and session storage. Call the desired storage, pass a key and a value and it returns the value and setValue like useState, and it returns removeValue that deletes it from the storage.
```js
const [name, setName, removeName] = useSessionStorage("name", "Kyle")
const [age, setAge, removeAge] = useLocalStorage("age", 26)
```

## 9. useAsync
This hook makes working with async code easy. Pass it a callback and optional dependecies and it return the loading state, value and the error if it arrises.
``` js
const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true
      setTimeout(() => success ? resolve("Hi") : reject("Error"), 1000)
    })
})
```

## 10. useFetching
This hook takes in the url of the data you want to fetch and the options and dependencies are optional. It returns the loading state, value and an error if the arrises.
``` js
const { loading, error, value } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {}, [id])
```

## 11. useScript
This hook takes in the url of the script you want to use, it creates a new script element. It return the loading state and an error if it arrises.
``` js
const { loading, error } = useScript("https://code.jquery.com/jquery-3.7.1.slim.js")
```

## 12. useDeepComapareEffect
This hook is like useEffect but it does get called if the values inside the dependencies haven't changed.
``` js
const person = { 
    age: age,
    name: "Kyle"
}
const useDeepCompareEffectCountRef = useRef()
useDeepCompareEffect(() => {
    useDeepCompareEffectCountRef.current.textContent = parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
}, [person])
```
## 13. useEventListener
This hook makes working with event listeners easy. Pass it the event, a callback and the element (by default it's the window). 
``` js
useEventListener("keydown", (e) => {
    alert(e.key)
})
```

## 14. useOnScreen
This hook takes a refrence to an element and a margin that is 0px by default and return true if it's visible on the screen
``` js
const headerRef = useRef()
const visible = useOnScreen(headerRef, "-100px")
<h1 ref={headerRef}>Header {visible && "(Visible)</h1>

```
## 15. useWindowSize
This simple hook return the width and the height of the window element.
``` js
const { width, height } = useWindowSize()
```

## 16. useMediaQuery
This hooks takes in a media query in the form of a css-like string. It return true if the media query is applied.
``` js
const isLarge = useMediaQuery("(min-width: 200px)")
```

## 17. useGeolocation
This hook takes in optional options and it just returns the loading state, the data which is data about the user location and an error if it arrises.
``` js
const { loading, error, data } = useGeolocation()
```

## 18. useStateWithValidation
This hook takes in the validation function and the initial value. I return the state, the setState and the isValid boolean.
```js
const [username, setUsername, isValid] = useStateWithValidation(name => name.length > 5, "")
```

## 19. useSize
This hook takes in an element and it return its size as well as many other usefull information from the **ResizeObserver**.
```js
const ref = useRef()
const size = useSize(ref)
<textarea ref={ref}></textarea>
```

## 20. useEffectOnce
This a simple hook that simulates calling useEffect with [] as the dependencies. It takes in jsut the callback function.
```js
useEffectOnce(() => alert("Hi"))
```

## 21. useClickOutside
This hooks takes in a ref and a callback. If you click outiside the element, the callback is called.
``` js
const ref = useRef()
useClickOutside(modalRef, () => alert("Callback called!"))
<p ref={ref}>Lorem ....</p>
```

## 22. useDarkMode
This is a hook that when called applies dark mode to the app. It can be modified to apply any css styles.
``` js
<button onClick={() => useDarkMode()}>Use Dark Mode</button>
```

## 23. useCopyToClipboard
This hook takes in text that will be copied to clipboard. Install the **copy-to-clipboard** library.
``` js
<button onClick={() => copyToClipboard("Copied text!")}>Copy Text</button>
```

## 24. useCookie
Simple hook that uses the **js-cookie** library. Pass it a key and a value, and create a cookie. It returns the value, an update method and a remove function.
``` js
const [value, update, remove] = useCookie("name", "John")
```

## 25. useTranslation
This hook returns the language, setLanguage method, setFallBackLanguage method and the translate method (t). 
``` js
const { language, setLanguage, setFallbackLanguage, t} = useTranslation()
```

## 26. useOnlineStatus
This hook returns true if the user is online.
``` js
const online = useOnlineStatus()
```

## 27. useRenderCount
This hook return a count of the number of renders. Be careful with **React.StrictMode**.
``` js
const renderCount = useRenderCount()
```

## 28. useDebugInformation
Simple hook all the information necessary to debug a component.
```js
const info = useDebugInformation("component", props)
```

## 29. useHover
Takes in a ref to an element, and it returns **true** if the element is being hovered.
``` js
const hovered = useHover(ref)
```

## 30. useLongPress
Takes in a ref to an element, a callback, and a delay. After you hold the element for the duration of the delay, the callback is called
``` js
useLongPress(ref, () => alert("Long Press detected!"), { delay: 300})
```

That was the last hook. Hope this was helpful.
