# How do you handle state management in React

**State management** in React involves controlling how data changes over time and how those changes are reflected in the UI. The approach you choose depends on your application's complexity, the scope of the state, and how much data needs to be shared between components.

### Core Strategies for State Management in React

- **Local State:**
Use `useState` or `useReducer` for managing state that only affects a single component or a small group of components. This is ideal for UI interactions, form inputs, toggles, and other component-specific data[^2] [^3] [^5].

```javascript
const [count, setCount] = useState(0);
```

- **Lifting State Up:**
When multiple child components need to share the same state, move the state to their nearest common parent and pass it down via props. This pattern is called *state lifting* and helps synchronize shared data[^5].
- **Global State:**
If you need to share state across many components or distant parts of your app, consider using:
    - **React Context API:** Good for static or rarely changed data (like themes or user authentication status). Avoid using context for frequently updated values, as it can cause unnecessary re-renders[^2].
    - **State Management Libraries:** For large or complex apps, libraries like **Redux** or **MobX** provide a centralized, predictable state container. These tools help manage complex state interactions, side effects, and debugging[^1][^4].
- **Server State (Asynchronous Data):**
For data fetched from APIs or servers, use specialized libraries like **React Query** or **SWR**. These tools handle caching, background updates, and error states, reducing boilerplate and improving performance[^3].


### Best Practices

- **Keep state minimal and flat:**
Only store what is necessary for rendering. Avoid deeply nested or redundant state, as it complicates updates and maintenance[^1] [^4] [^8].
- **Colocate state:**
Keep state as close as possible to where it is used. This reduces prop-drilling and makes components more modular and easier to test[^2] [^3].
- **Avoid direct state mutation:**
Always use state setter functions (like `setState` or dispatch functions) to update state, ensuring React can properly track changes and re-render as needed[^1].
- **Explicitly handle loading and error states:**
Especially for asynchronous data, always manage loading and error conditions to provide a smooth user experience[^3].
- **Use selectors for derived data:**
Compute derived values outside of components when possible to avoid unnecessary recalculations and keep components simple[^4].


### Example: Local State with useState

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```


### Example: Global State with Redux (simplified)

```javascript
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>
      Clicked {count} times
    </button>
  );
}
```

**In summary:**
Choose the simplest state management solution that fits your needs: start with local state, lift state when sharing is required, use Context or a library for global needs, and leverage tools like React Query for server state. Always keep state minimal, colocated, and well-structured for maintainable and performant React applications[^1][^2][^3][^4][^5][^8].

[^1]: https://dev.to/hitheshkumar/6-best-practices-for-react-state-management-n2f

[^2]: https://www.linkedin.com/pulse/best-practices-managing-state-react-nilupul-perera-1iuac

[^3]: https://blog.pixelfreestudio.com/best-practices-for-managing-state-in-react-applications/

[^4]: https://www.dhiwise.com/post/tackling-state-management-in-large-react-applications-best-practices-and-testing-strategies

[^5]: https://cevo.com.au/post/react-state-management-made-easy-basics-essentials-and-best-practices/

[^6]: https://react.dev/learn/managing-state

[^7]: https://www.reddit.com/r/reactjs/comments/1inlrx5/how_is_state_management_handled_in_realworld/

[^8]: https://react.dev/learn/choosing-the-state-structure

