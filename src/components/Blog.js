import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 m-8'>

            <div className="question-1  rounded-lg text-justify p-4 shadow-md  bg-cyan-100 text-slate-500">
                <h2 className='text-2xl font-bold'>1. What is the purpose of the React Router?</h2>
                <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications, React Router is used to define multiple routes in the application. React Router is types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                <br />
                <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser wth data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>

            <div className="question-2 rounded-lg text-justify p-4 shadow-md bg-cyan-100 text-slate-500">
                <h2 className='text-2xl font-bold'>2. How does Context API work?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p> <br />
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p> <br />
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>

            <div className="question-3 rounded-lg text-justify p-4 shadow-md bg-cyan-100 text-slate-500">
                <h2 className='text-2xl font-bold'>3. what is useRef hook?</h2>

                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p><br />
                <p>useRef() only returns one item. It returns an Object called current.</p><br />
                <p>When we initialize useRef we set the initial value: useRef(0)</p><br />
                <p>The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.</p>
            </div>
        </div>
    );
};

export default Blog;