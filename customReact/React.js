
function render(reactElement, root) {
    const element = document.createElement(reactElement.type);
    element.innerText = reactElement.children;
    for(let prop in reactElement.props){
        element.setAttribute(prop, reactElement.props[prop]);
    }
    root.append(element);
}

const maincontainer = document.getElementById('root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click to visit Google'
}

render(reactElement, maincontainer);