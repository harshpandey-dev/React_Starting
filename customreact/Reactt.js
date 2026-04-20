
const maincontainer=document.querySelector('#root')
const reactElement={
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click me to vist google'
} 
function cr(reactElements,container)
{  /*
    const domElement=document.createElement(reactElements.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElements.props.href)
    domElement.setAttribute('target',reactElements.props.target)
    container.appendChild(domElement)  */

   const domElemnt= document.createElement(reactElements.type)
   domElemnt.innerHTML=reactElements.children
   for (const prop in reactElements.props ){
    if (prop==='children')continue;
    domElemnt.setAttribute(prop,reactElements.props[prop])
container.appendChild(domElemnt)
   }

} 
cr(reactElement,maincontainer)