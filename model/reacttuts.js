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
    title: `first component`,
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
    ],
  },
  {
    title: `<fragment/>`,
    tags: `&lt;Fragment&gt;, often used via &lt;&gt;...&lt;/&gt; syntax, lets you group elements without a wrapper node.`,
    description: ``,
    content: [
      {
        subTitle: `Props`,
        subDescription: `<b>optional</b> key: Fragments declared with the explicit <Fragment> syntax may have keys.`,
        snippet: `

        <>
        <OneChild />
        <AnotherChild />
        </>

        (or)

        <Fragment key={yourKey} >
        <OneChild />
        <AnotherChild />
        </Fragment>
            `,
      },
    ],
  },
  {
    title: `react props`,
    tags: `Props are arguments passed into React components.`,
    description: `props stands for properties.Props are passed to components via HTML attributes.They are nothing but <b>objects</b>.`,
    content: [
      {
        subTitle: `Syntax`,
        subDescription: `To send props into a component, use the same syntax as HTML attributes:`,
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
        subTitle: ``,
        subDescription: ``,
        snippet: ``,
      },
    ],
  },
  {
    title: `useState Hook`,
    tags: `useState is a React Hook that lets you add a state variable to your component.`,
    description: ``,
    content: [
      {
        subTitle: `syntax`,
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
            <li><p style="margin-left : 0.4rem;">Call useRef at the top level of your component to declare a ref.</p></li>
            <li><p style="margin-left : 0.4rem;"> You can mutate the ref.current property. Unlike state, it is mutable. </p></li>
            <li><p style="margin-left : 0.4rem;"> <b>Changing a ref does not trigger a re-render.</b> This means refs are perfect for storing information that doesn’t affect the visual output of your component.  </p></li>
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
            <li><p style="margin-left : 0.4rem;"> If your Effect wasn’t caused by an interaction (like a click), React will generally let the browser paint the updated screen first before running your Effect. If your Effect is doing something visual (for example, positioning a tooltip), and the delay is noticeable (for example, it flickers), replace useEffect with <b>useLayoutEffect</b>. </p></li>
            <li><p style="margin-left : 0.4rem;"> Effects only run on the client. They don’t run during server rendering. </p></li>
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
    title: `useid hook`,
    tags: `useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.`,
    description: ``,
    content: [
      {
        subTitle: `syntax & caveats`,
        subDescription: `
        <ul>
            <li><p style="margin-left : 0.4rem;">useId is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.</p></li>
            <li><p style="margin-left : 0.4rem;"> useId <b>should not be used to generate keys in a list/<b></li>
        </ul>
        `,
        snippet: `


        import { useId } from 'react';

        function PasswordField() {
          const passwordHintId = useId();

          return <>
            <input type="password" aria-describedby={passwordHintId} />
            <p id={passwordHintId}>
          </>;

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
        subDescription: `   <ul>
            <li><p style="margin-left : 0.4rem;">Call useDebugValue at the top level of your custom Hook to display a readable debug value.</p></li>
            <li><p style="margin-left : 0.4rem;"> useId <b>should not be used to generate keys in a list/<b></li>
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
