/** @format */

const reactuts = [
  {
    title: `introduction to react js`,
    tags: `react js is a javascript library.`,

    description: `<b>ReactJS</b> is an open-source JavaScript library used to create user interfaces in a declarative and efficient way.React is used to create modular user interfaces and promotes the development of reusable UI components that display dynamic data. `,
    content: [
      {
        subTitle: `node js installation`,
        subDescription: `react runs on node js. therefore , we need to install nodejs on our work environment. <a href="https://nodejs.org/en/download" target="_blank"><b><i>Click To Download</i></b> </a> .Once , downladed and configured type the below commands.`,
        snippet: `
               node -v //Gives version of node installed.
               npm -v // Gives version of npm installed .
            `,
      },
      {
        subTitle: `create react app`,
        subDescription: `Use the below command to create the react app.`,
        snippet: `
            npx create-react-app my-app
            cd my-app
            npm start
            `,
      },
      {
        subTitle: `editor configuration`,
        subDescription: `<b>VS Code</b> is one of the most popular editors in use today. It has a large marketplace of extensions and integrates well with popular services like GitHub. Extensions to be installed in the editor are <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank"><b><i>Prettier -Code formatter</i></b> </a>, <a href="https://eslint.org" target="_blank"><b><i>ESLint</i></b> </a> , <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank"><b><i>Material Icon Theme</i></b> </a>. `,
        snippet: ``,
      },
    ],
  },

  {
    title: `create first component`,
    tags: `React applications are built from isolated pieces of UI called components.`,
    description: `A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page.`,
    content: [
      {
        subTitle: `Person component`,
        subDescription: `Don't forget to <b>export</b> the variable Person which holds the arrow function.`,
        snippet: `

            import React, { Fragment } from "react";


            const Person = (props) => {
            const { name, age } = props;
            return (
                <Fragment>
                <div>
                    <p>
                    <b>name :</b> {name}
                    </p>
                    <p>
                    <b>age :</b> {age}
                    </p>
                </div>
                </Fragment>
            );
            };

            export default Person;

            `,
      },
      {
        subTitle: `how to import person component`,
        subDescription: `Use <b>import</b> keyword to import the  Person component.`,
        snippet: `

            import Person from "./components/Person/Person";
            import "./styles.css";

            export default function App() {
                return (
                    <div className="App">
                    <Person name={"maturi"} age={30} />
                    <Person name={"james"} age={40} />
                    <Person name={"camily"} age={40} />
                    <Person name={"caterpillar"} age={36} />
                    </div>
                );
            }

            `,
      },
      {
        subTitle: `passing data from parent to child component`,
        subDescription: ` <b>props</b> are use to pass data from parent to child componenet.`,
        snippet: `


        // Passing props to component.
        const myElement = <Car brand="Ford" />;

        //Component that recives the props.
        function Car(props) {
            return <h2>I am a { props.brand }!</h2>;
        }

            `,
      },
      {
        subTitle: `passing data from child to parent component`,
        subDescription: ` <b>callbacks</b> are use to pass data from child to parent componenet.`,
        snippet: `

          const Parent = () => {
            const [message, setMessage] = React.useState("Hello World");

            //Callback
            const chooseMessage = (message) => {
              setMessage(message);
            };
            return (
              <div>
                <h1>{message}</h1>
                <Child chooseMessage={chooseMessage} />
              </div>
            );
          };
          const Child = ({ chooseMessage }) => {
            let msg = 'Goodbye';
            return (
              <div>
                <button onClick={() => chooseMessage(msg)}>Change    Message</button>
              </div>
            );
          };

            `,
      },
    ],
  },
  {
    title: `built-in react components`,
    tags: `&lt;Fragment&gt;, &lt;Profiler&gt;, &lt;StrictMode&gt  &  &lt;Suspense&gt;`,
    description: ``,
    content: [
      {
        subTitle: `<Fragment>`,
        subDescription: `&lt;Fragment&gt;, often used via <>...</> syntax, lets you group elements without a wrapper node.Wrap elements in &lt;Fragment&gt; to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag <>&lt;/&gt; is shorthand for &lt;Fragment&gt;&lt;/Fragment&gt; in most cases. Fragement can have only <b>Key</b> has an attribute.`,
        snippet: `

        function Post({ title, body }) {
          return (
            <>
              <PostTitle title={title} />
              <PostBody body={body} />
            </>
          );
        }


        `,
      },
      {
        subTitle: `<Profiler>`,
        subDescription: `&lt;Profiler&gt; lets you measure rendering performance of a React tree programmatically.`,
        snippet: `

        function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
          // Aggregate or log render timings...
          //Is a callback passsed to the the onRender which returns the following paramters.
        }

        <App>
          <Profiler id="Sidebar" onRender={onRender}>
            <Sidebar />
          </Profiler>
          <PageContent />
        </App>

        `,
      },
      {
        subTitle: `<StrictMode>`,
        subDescription: `&lt;StrictMode&gt; lets you find common bugs in your components early during development.`,
        snippet: `
        <StrictMode>
          <App />
        </StrictMode>
        `,
      },
      {
        subTitle: `<Suspense>`,
        subDescription: `&lt;Suspense&gt; lets you display a fallback until its children have finished loading. fallback is an alternative ui to renderin place of actual UI if it has not finished loading.`,
        snippet: `

        <Suspense fallback={<Loading />}>
          <Albums />
        </Suspense>

        `,
      },
    ],
  },
  {
    title: `built-in react aPIs`,
    tags: `createContext , forwardRef , lazy , memo , startTransition`,
    description: ``,
    content: [
      {
        subTitle: `createContext`,
        subDescription: `createContext lets you create a context that components can provide or read.`,
        snippet: `

        import { createContext } from 'react';

        //creating context
        const ThemeContext = createContext('light');
        const AuthContext = createContext(null);


        function Button() {
          //Consuming context
          const theme = useContext(ThemeContext);
          // ...
        }

        function Profile() {
          //Consuming context
          const currentUser = useContext(AuthContext);
          // ...
        }


        `,
      },
      {
        subTitle: `forwardRef`,
        subDescription: `forwardRef lets your component expose a DOM node to parent component with a ref.`,
        snippet: `

        const MyInput = forwardRef(function MyInput(props, ref) {
          return (
            <label>
              {props.label}
              <input ref={ref} />
            </label>
          );
        });

        `,
      },
      {
        subTitle: `lazy`,
        subDescription: `lazy lets you defer loading component’s code until it is rendered for the first time.`,
        snippet: `

        import { lazy } from 'react';

        const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

        `,
      },
      {
        subTitle: `memo`,
        subDescription: `memo lets you skip re-rendering a component when its props are unchanged.`,
        snippet: `

        const Greeting = memo(function Greeting({ name }) {
          return <h1>Hello, {name}!</h1>;
        });

        export default Greeting;

        `,
      },
      {
        subTitle: `startTransition`,
        subDescription: `startTransition lets you update the state without blocking the UI.The startTransition function lets you mark a state update as a transition same as useTransition but doesn't provide a way to track wether a transition is pending.`,
        snippet: `

        import { startTransition } from 'react';

        function TabContainer() {
          const [tab, setTab] = useState('about');

          function selectTab(nextTab) {
            startTransition(() => {
              setTab(nextTab);
            });
          }
          // ...
        }

        `,
      },
    ],
  },
  {
    title: `react dom components`,
    tags: `React supports all of the browser built-in HTML and SVG components.`,
    description: `&lt;form&gt;, &lt;input&gt;, &lt;option&gt;,&lt;progress&gt;,&lt;select&gt;,&lt;textarea&gt; . They are special in React because passing the value prop to them makes them controlled.`,
    content: [
      {
        subTitle: `controlled component`,
        subDescription: `A controlled component is one where the data, typically input form data, is handled by the React state mechanism. Rather than allowing the DOM to manage this data, React takes charge, ensuring that data handling and changes are consistent with the React paradigm.`,
        snippet: `

        function TextInput() {

          const [text, setText] = useState('');

          return <input type="text" value={text} onChange={e => setText(e.target.value)} />;

        }


        `,
      },
      {
        subTitle: `uncontrolled components`,
        subDescription: `An uncontrolled component in React is one that stores its own state internally and does not control its value through the React state mechanism. Instead of being managed by React’s state system, it relies directly on the DOM to provide its current value.`,
        snippet: `

        class MyComponent extends React.Component {
            constructor(props) {

              super(props);

              this.inputRef = React.createRef();

            }



            handleSubmit = () => {

              alert('A name was submitted: ' + this.inputRef.current.value);

            }



          render() {

              return (

                <form onSubmit={this.handleSubmit}>

                  <input type="text" ref={this.inputRef} />

                <button type="submit">Submit</button>

              </form>

              );

          }

        }



        `,
      },
    ],
  },
  {
    title: `react dom aPIs`,
    tags: `createPortal , flushSync `,
    description: `The react-dom package contains methods that are only supported for the web applications (which run in the browser DOM environment). They are not supported for React Native.`,
    content: [
      {
        subTitle: `createPortal`,
        subDescription: `createPortal lets you render some children into a different part of the DOM.`,
        snippet: `

        import { createPortal } from 'react-dom';

        // ...

        <div>
          <p>This child is placed in the parent div.</p>
          {createPortal(
            <p>This child is placed in the document body.</p>,
            document.body
          )}
        </div>

        `,
      },
      {
        subTitle: `flushSync`,
        subDescription: `flushSync lets you force React to flush any updates inside the provided callback synchronously. This ensures that the DOM is updated immediately.`,
        snippet: `

        import { flushSync } from 'react-dom';

        flushSync(() => {
          setSomething(123);
        });

        `,
      },
    ],
  },
  {
    title: `useState Hook`,
    tags: `useState is a React Hook that lets you add a state variable to your component.`,
    description: ``,
    content: [
      {
        subTitle: `Syntax & caveats`,
        subDescription: `<b>initialState</b>: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

        <ul>
            <li><p style="margin-left : 0.4rem;">useState returns an array with exactly two values: <b>current state</b> & <b>setter function</b>.<b><i>It trigger a re-render a component if the  value is updated using setter.</i></b></p></li>
            <li><p style="margin-left : 0.4rem;"> you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions.</p></li>
        </ul>

            `,
        snippet: `
            //Syntax:
            const [state, setState] = useState(initialState);

            //usage:
            import { useState } from 'react';

            function MyComponent() {
            const [age, setAge] = useState(28);
            }



            `,
      },
    ],
  },
  {
    title: `useRef hook`,
    tags: `useRef is a React Hook that lets you reference a value that’s not needed for rendering.`,
    description: ``,
    content: [
      {
        subTitle: `Syntax & caveats`,
        subDescription: `
           <ul>
            <li><p style="margin-left : 0.4rem;">Call useRef at the top level of your component to declare a ref.</p> </li>
            <li><p style="margin-left : 0.4rem;"> You can mutate the ref.current property. Unlike state, it is mutable.</p>  </li>
            <li><p style="margin-left : 0.4rem;"> <b>Changing a ref does not trigger a re-render.</b> This means refs are perfect for storing information that doesn’t affect the visual output of your component. </p>  </li>
        </ul>
            `,
        snippet: `
        //Syntax :
        const ref = useRef(initialValue)

        //Usage:
        import { useRef } from 'react';

        export default function Counter() {
            let ref = useRef(0);

            function handleClick() {
                ref.current = ref.current + 1;
                alert('You clicked ' + ref.current + ' times!');
            }

            return (
                <button onClick={handleClick}>
                Click me!
                </button>
            );
        }

            `,
      },
    ],
  },
  {
    title: `useImperativeHandle hook`,
    tags: `useImperativeHandle is a React Hook that lets you customize the handle exposed as a <b>ref</b>.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
            <li><p style="margin-left : 0.4rem;"><b>Do not overuse refs.</b> You should only use refs for imperative behaviors that you can’t express as props: for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on..</p></li>
         </ul>
        `,
        snippet: `
        import { forwardRef, useRef, useImperativeHandle } from 'react';

        const MyInput = forwardRef(function MyInput(props, ref) {
          const inputRef = useRef(null);

          useImperativeHandle(ref, () => {
            return {
              focus() {
                inputRef.current.focus();
              },
              scrollIntoView() {
                inputRef.current.scrollIntoView();
              },
            };
          }, []);

          return <input {...props} ref={inputRef} />;
        });
`,
      },
    ],
  },
  {
    title: `useEffect hook`,
    tags: `useEffect is a React Hook that lets you synchronize a component with an external system.`,
    description: ``,
    content: [
      {
        subTitle: `Syntax & caveats`,
        subDescription: `
              <ul>
            <li><p style="margin-left : 0.4rem;">useEffect is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.</p></li>
            <li><p style="margin-left : 0.4rem;"> When Strict Mode is on, React will run one extra development-only setup+cleanup cycle before the first real setup. This is a stress-test that ensures that your cleanup logic “mirrors” your setup logic and that it stops or undoes whatever the setup is doing. If this causes a problem, implement the cleanup function.</p></li>
            <li><p style="margin-left : 0.4rem;"> If your Effect wasn’t caused by an interaction (like a click), React will generally let the browser paint the updated screen first before running your Effect. If your Effect is doing something visual (for example, positioning a tooltip), and the delay is noticeable (for example, it flickers), replace useEffect with <b>useLayoutEffect</b>.</p> </li>
            <li><p style="margin-left : 0.4rem;"> Effects only run on the client. They don’t run during server rendering. </p> </li>
        </ul>`,
        snippet: `
        function ChatRoom({ roomId }) {
                const [serverUrl, setServerUrl] = useState('https://localhost:1234');

                useEffect(() => {
                  const connection = createConnection(serverUrl, roomId);
                  connection.connect();

                  return () => {
                    //Clenaup  Code.
                    connection.disconnect();
                  };
                }, [serverUrl, roomId]);
                // ...
        }

        `,
      },
    ],
  },
  {
    title: `useId hook`,
    tags: `useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
            <li><p style="margin-left : 0.4rem;">useId is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.</p></li>
            <li><p style="margin-left : 0.4rem;"> useId <b>should not be used to generate keys in a list<b>.</p></li>
        </ul>
        `,
        snippet: `
        import { useId } from 'react';

        function PasswordField() {
          const passwordHintId = useId();
          return (
            <>
              <label>
                Password:
                <input
                  type="password"
                  aria-describedby={passwordHintId}
                />
              </label>
              <p id={passwordHintId}>
                The password should contain at least 18 characters
              </p>
            </>
          );
        }
`,
      },
    ],
  },
  {
    title: `useDebugValue hook`,
    tags: `useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
            <li><p style="margin-left : 0.4rem;">Call useDebugValue at the top level of your custom Hook to display a readable debug value.</p></li>
            <li><p style="margin-left : 0.4rem;"> useId <b>should not be used to generate keys in a list</b>.</p></li>
        </ul>`,
        snippet: `

        import { useDebugValue } from 'react';

        function useOnlineStatus() {
          // ...
          useDebugValue(isOnline ? 'Online' : 'Offline');
          // ...
        }

        `,
      },
    ],
  },
  {
    title: `useDeferredValue hook`,
    tags: `useDeferredValue is a React Hook that lets you defer updating a part of the UI.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
          <li><p style="margin-left : 0.4rem;">During the initial render, the deferred value will be the same as the value you provided.</p></li>
          <li><p style="margin-left : 0.4rem;"> During updates, the deferred value will “lag behind” the latest value. In particular, React will first re-render without updating the deferred value, and then try to re-render with the newly received value in background.</p></li>
          <li><p style="margin-left : 0.4rem;"> The values you pass to useDeferredValue should either be primitive values (like strings and numbers) or objects created outside of rendering. If you create a new object during rendering and immediately pass it to useDeferredValue, it will be different on every render, causing unnecessary background re-renders.</p></li>
        </ul>

        `,
        snippet: `

        import { useState, useDeferredValue } from 'react';

        function SearchPage() {
          const [query, setQuery] = useState('');
          const deferredQuery = useDeferredValue(query);
          // ...
        }

        `,
      },
      {
        subTitle: ``,
        subDescription: ``,
        snippet: ``,
      },
    ],
  },
  {
    title: `useInsertionEffect hook`,
    tags: `useInsertionEffect allows inserting elements into the DOM before any layout effects fire.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
          <li><p style="margin-left : 0.4rem;">Effects only run on the client. They don’t run during server rendering.</p></li>
          <li><p style="margin-left : 0.4rem;"> You can’t update state from inside useInsertionEffect.</p></li>
          <li><p style="margin-left : 0.4rem;"> By the time useInsertionEffect runs, refs are not attached yet.</p></li>
        </ul>

        `,
        snippet: `

          // Inside your CSS-in-JS library
          let isInserted = new Set();

          function useCSS(rule) {
            useInsertionEffect(() => {
              // As explained earlier, we don't recommend runtime injection of <style> tags.
              // But if you have to do it, then it's important to do in useInsertionEffect.
              if (!isInserted.has(rule)) {
                isInserted.add(rule);
                document.head.appendChild(getStyleForRule(rule));
              }
            });
            return rule;
          }

          function Button() {
            const className = useCSS('...');
            return <div className={className} />;
          }

        `,
      },
    ],
  },
  {
    title: `useLayoutEffect hook`,
    tags: `useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
          <li><p style="margin-left : 0.4rem;">Call useLayoutEffect to perform the layout measurements before the browser repaints the screen.</p></li>
        </ul>
        `,
        snippet: `

        import { useState, useRef, useLayoutEffect } from 'react';

        function Tooltip() {
          const ref = useRef(null);
          const [tooltipHeight, setTooltipHeight] = useState(0);

          useLayoutEffect(() => {
            const { height } = ref.current.getBoundingClientRect();
            setTooltipHeight(height);
          }, []);
          // ...

        `,
      },
    ],
  },
  {
    title: `useMemo hook`,
    tags: `useMemo is a React Hook that lets you cache the result of a calculation between re-renders.`,
    description: `
          <ul>
         <li><p style="margin-left : 0.4rem;">The function should be a pure function<b>That doesn't accept any arguments.</b></p></li>
          <li><p style="margin-left : 0.4rem;">On the initial render, useMemo returns the result of calling calculateValue with no arguments.</p></li>
          <li><p style="margin-left : 0.4rem;">During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.</p></li>
        </ul>`,
    content: [
      {
        subTitle: `syntax & usage`,
        subDescription: ``,
        snippet: `

       import { useMemo } from 'react';

        function TodoList({ todos, tab }) {
          const visibleTodos = useMemo(
            () => filterTodos(todos, tab),
            [todos, tab]
          );
          // ...
        }
        `,
      },
    ],
  },
  {
    title: `useCallback hook`,
    tags: `useCallback is a React Hook that lets you cache a function definition between re-renders.`,
    description: `
     <ul>
        <li><p style="margin-left : 0.4rem;">useCallback is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.</p></li>
        <li><p style="margin-left : 0.4rem;">React <b> will not throw away the cached function unless there is a specific reason to do that.</b> </p></li>
      </ul>`,
    content: [
      {
        subTitle: `Syntax & usage:`,
        subDescription: ``,
        snippet: `

        import { useCallback } from 'react';

        export default function ProductPage({ productId, referrer, theme }) {

          const handleSubmit = useCallback((orderDetails) => {

            post('/product/' + productId + '/buy', {
              referrer,
              orderDetails,
            });

          }, [productId, referrer]);`,
      },
    ],
  },
  {
    title: `useReducer hook`,
    tags: `useReducer is a React Hook that lets you add a reducer to your component.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
         <li><p style="margin-left : 0.4rem;">useReducer is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.</p></li>
          <li><p style="margin-left : 0.4rem;">In Strict Mode, React will <b>call your reducer and initializer twice </b>in order to help you find accidental impurities. </p></li>
        </ul>
        `,
        snippet: `

        import { useReducer } from 'react';

        function reducer(state, action) {
          if (action.type === 'incremented_age') {
            return {
              age: state.age + 1
            };
          }
          throw Error('Unknown action.');
        }

        export default function Counter() {
          const [state, dispatch] = useReducer(reducer, { age: 42 });

          return (
            <>
              <button onClick={() => {
                dispatch({ type: 'incremented_age' })
              }}>
                Increment age
              </button>
              <p>Hello! You are {state.age}.</p>
            </>
          );
        }

        `,
      },
    ],
  },
  {
    title: `useContext hook`,
    tags: `useContext is a React Hook that lets you read and subscribe to context from your component.`,
    description: `
    <ul>
         <li><p style="margin-left : 0.4rem;">useContext() call in a component is not affected by providers returned from the same component. The corresponding <Context.Provider> needs to be above the component doing the useContext() call.</p></li>
          <li><p style="margin-left : 0.4rem;">React automatically re-renders all the children that use a particular context starting from the provider that receives a different value. The previous and the next values are compared with the Object.is comparison. Skipping re-renders with memo does not prevent the children receiving fresh context values.</p></li>
        </ul>`,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: ``,
        snippet: `

        import { createContext, useContext } from 'react';

        const ThemeContext = createContext(null);

        export default function MyApp() {
          return (
            <ThemeContext.Provider value="dark">
              <Form />
            </ThemeContext.Provider>
          )
        }

        function Form() {
          return (
            <Panel title="Welcome">
              <Button>Sign up</Button>
              <Button>Log in</Button>
            </Panel>
          );
        }

        function Panel({ title, children }) {
          const theme = useContext(ThemeContext);
          const className = 'panel-' + theme;
          return (
            <section className={className}>
              <h1>{title}</h1>
              {children}
            </section>
          )
        }

        function Button({ children }) {
          const theme = useContext(ThemeContext);
          const className = 'button-' + theme;
          return (
            <button className={className}>
              {children}
            </button>
          );
        }


        `,
      },
    ],
  },
  {
    title: `useSyncExternalStore hook`,
    tags: `useSyncExternalStore is a React Hook that lets you subscribe to an external store.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
         <li><p style="margin-left : 0.4rem;">The store snapshot returned by getSnapshot must be immutable. If the underlying store has mutable data, return a new immutable snapshot if the data has changed. Otherwise, return a cached last snapshot.</p></li>
          <li><p style="margin-left : 0.4rem;">If a different subscribe function is passed during a re-render, React will re-subscribe to the store using the newly passed subscribe function. You can prevent this by declaring subscribe outside the component. </p></li>
          <li><p style="margin-left : 0.4rem;">If the store is mutated during a non-blocking transition update, React will fall back to performing that update as blocking. Specifically, for every transition update, React will call getSnapshot a second time just before applying changes to the DOM. If it returns a different value than when it was called originally, React will restart the update from scratch, this time applying it as a blocking update, to ensure that every component on screen is reflecting the same version of the store.</p></li>
          <li><p style="margin-left : 0.4rem;">It’s not recommended to suspend a render based on a store value returned by useSyncExternalStore. The reason is that mutations to the external store cannot be marked as non-blocking transition updates, so they will trigger the nearest Suspense fallback, replacing already-rendered content on screen with a loading spinner, which typically makes a poor UX.</p></li>
        </ul>
        `,
        snippet: `

        // todoStore.js
        // This is an example of a third-party store
        // that you might need to integrate with React.

        // If your app is fully built with React,
        // we recommend using React state instead.

        let nextId = 0;
        let todos = [{ id: nextId++, text: 'Todo #1' }];
        let listeners = [];

        export const todosStore = {
          addTodo() {
            todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
            emitChange();
          },
          subscribe(listener) {
            listeners = [...listeners, listener];
            return () => {
              listeners = listeners.filter(l => l !== listener);
            };
          },
          getSnapshot() {
            return todos;
          }
        };

        function emitChange() {
          for (let listener of listeners) {
            listener();
          }
        }


      //App.js

      import { useSyncExternalStore } from 'react';
      import { todosStore } from './todoStore.js';

      export default function TodosApp() {
        const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
        return (
          <>
            <button onClick={() => todosStore.addTodo()}>Add todo</button>
            <hr />
            <ul>
              {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
              ))}
            </ul>
          </>
        );
      }


        `,
      },
    ],
  },
  {
    title: `useTransition hook`,
    tags: `useTransition is a React Hook that lets you update the state without blocking the UI.`,
    description: `
     <ul>
         <li><p style="margin-left : 0.4rem;">useTransition is a Hook, so it can only be called inside components or custom Hooks. If you need to start a transition somewhere else (for example, from a data library), call the standalone startTransition instead.</p></li>
          <li><p style="margin-left : 0.4rem;">You can wrap an update into a transition only if you have access to the set function of that state. If you want to start a transition in response to some prop or a custom Hook value, try useDeferredValue instead.</p></li>
          <li><p style="margin-left : 0.4rem;">The function you pass to startTransition must be synchronous. React immediately executes this function, marking all state updates that happen while it executes as transitions. If you try to perform more state updates later (for example, in a timeout), they won’t be marked as transitions.</p></li>
          <li><p style="margin-left : 0.4rem;">A state update marked as a transition will be interrupted by other state updates. For example, if you update a chart component inside a transition, but then start typing into an input while the chart is in the middle of a re-render, React will restart the rendering work on the chart component after handling the input update.</p></li>
          <li><p style="margin-left : 0.4rem;">Transition updates can’t be used to control text inputs.</p></li>
          <li><p style="margin-left : 0.4rem;">If there are multiple ongoing transitions, React currently batches them together. This is a limitation that will likely be removed in a future release.</p></li>
        </ul>`,
    content: [
      {
        subTitle: `Syntax & usage:`,
        subDescription: ``,
        snippet: `

        function TabContainer() {
          const [isPending, startTransition] = useTransition();
          const [tab, setTab] = useState('about');

          function selectTab(nextTab) {
            startTransition(() => {
              setTab(nextTab);
            });
          }
          // ...
        }

        `,
      },
    ],
  },
  {
    title: `use hook`,
    tags: `use is a React Hook that lets you read the value of a resource like a Promise or context.`,
    description: `
     <ul>
         <li><p style="margin-left : 0.4rem;">Unlike all other React Hooks, use can be called within loops and conditional statements like if. Like other React Hooks, the function that calls use must be a Component or Hook.</p></li>
          <li><p style="margin-left : 0.4rem;">When called with a Promise, the use Hook integrates with Suspense and error boundaries. The component calling use suspends while the Promise passed to use is pending. If the component that calls use is wrapped in a Suspense boundary, the fallback will be displayed.  Once the Promise is resolved, the Suspense fallback is replaced by the rendered components using the data returned by the use Hook. If the Promise passed to use is rejected, the fallback of the nearest Error Boundary will be displayed.</p></li>
          <li><p style="margin-left : 0.4rem;">The function you pass to startTransition must be synchronous. React immediately executes this function, marking all state updates that happen while it executes as transitions. If you try to perform more state updates later (for example, in a timeout), they won’t be marked as transitions.</p></li>

        </ul>`,
    content: [
      {
        subTitle: `Syntax & usage:`,
        subDescription: ``,
        snippet: `

      import { createContext, use } from 'react';

      const ThemeContext = createContext(null);

      export default function MyApp() {
        return (
          <ThemeContext.Provider value="dark">
            <Form />
          </ThemeContext.Provider>
        )
      }

      function Form() {
        return (
          <Panel title="Welcome">
            <Button show={true}>Sign up</Button>
            <Button show={false}>Log in</Button>
          </Panel>
        );
      }

      function Panel({ title, children }) {
        const theme = use(ThemeContext);
        const className = 'panel-' + theme;
        return (
          <section className={className}>
            <h1>{title}</h1>
            {children}
          </section>
        )
      }

      function Button({ show, children }) {
        if (show) {
          const theme = use(ThemeContext);
          const className = 'button-' + theme;
          return (
            <button className={className}>
              {children}
            </button>
          );
        }
        return false
      }

        `,
      },
    ],
  },

  //   {
  //     title: ``,
  //     tags: ``,
  //     description: ``,
  //     content: [
  //       {
  //         subTitle: ``,
  //         subDescription: ``,
  //         snippet: ``,
  //       },
  //       {
  //         subTitle: ``,
  //         subDescription: ``,
  //         snippet: ``,
  //       },
  //     ],
  //   },
  //   {
  //     title: ``,
  //     tags: ``,
  //     description: ``,
  //     content: [
  //       {
  //         subTitle: ``,
  //         subDescription: ``,
  //         snippet: ``,
  //       },
  //       {
  //         subTitle: ``,
  //         subDescription: ``,
  //         snippet: ``,
  //       },
  //     ],
  //   },
];

export default reactuts;
