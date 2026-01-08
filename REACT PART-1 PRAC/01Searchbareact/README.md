#revision 1 

/react basics

In a React Todo application, these four hooks handle very different "responsibilities." Understanding them in the context of a single app is the best way to see how they work together.

1. useState (The Data)
Usage: Managing the list of todos and the text inside the input box. useState is for values that, when changed, should make the screen update (re-render).


Example: To store the array of todo objects.

Why: When you add a new todo or check a box, you want the UI to immediately reflect that change.

JavaScript

const [todos, setTodos] = useState([]); // The list
const [todoMsg, setTodoMsg] = useState(""); // The current input text




2. useEffect (The Side Effects)
Usage: Syncing with LocalStorage or an API. useEffect handles things that happen outside the normal React render cycle (Side Effects).

Example: Loading your saved todos from the browser's localStorage when the app first opens.

Why: You don't want your todos to vanish when you refresh the page.

JavaScript

useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos) setTodos(savedTodos);
}, []); // Runs once on mount





3. useRef (The Direct Access)
Usage: Focusing the input field or referencing a DOM element without re-rendering. useRef is like a "box" that holds a value but does not trigger a re-render when the value inside changes.

Example: Automatically focusing the input box when the "Edit" button is clicked.

Why: You don't need to re-render the whole app just to put the cursor inside a text box.

JavaScript

const inputRef = useRef(null);

const handleEdit = () => {
  inputRef.current.focus(); // Direct DOM manipulation
};




4. useCallback (The Performance)
Usage: Optimizing functions passed to child components. In a Todo app, you often have a TodoItem component. If you pass a function (like deleteTodo) to 100 items, React recreates that function 100 times every render unless you use useCallback.

Example: Wrapping your addTodo or deleteTodo functions.

Why: It "memoizes" (caches) the function so it isn't rebuilt unless its dependencies change.

JavaScript

const deleteTodo = useCallback((id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
}, []); // Function stays the same across renders






Hook,Purpose in Todo App,Triggers Re-render=>
useState,Stores the array of todos and input text.,Yes
useEffect,Saves/Loads todos from LocalStorage.,No (It responds to them)
useRef,Grabs the input box to focus it.,No
useCallback,"Prevents ""Delete"" functions from being recreated.",No
