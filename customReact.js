function customRender(reactElemet,Container){
    const domElement = document.createElement
    (reactElemet.type)
    domElement.innerHTML = reactElemet.children
    domElement.setAttribute('href',reactElemet.props.href)
    domElement.setAttribute('target',reactElemet.props.target)
    Container.appendChild(domElement)
}






const reactElemet = {
    type:'a',
    props:{
        href:'http://google.com'
        
    
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')
customRender(reactElemet,mainContainer)