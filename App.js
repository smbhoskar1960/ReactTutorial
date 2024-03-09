const parent = React.createElement(

    "div",{id:"parent"},[

    React.createElement("div", {id:"child1"},[
    React.createElement("h1",{},"Hello H1 !!!!!tag"), 
    React.createElement("h2",{},"Hello H2 !!!!!tag")
]),

    React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"Hello H1 !!!!!tag"), 
        React.createElement("h2",{},"Hello H2 !!!!!tag")
    ]),


]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)