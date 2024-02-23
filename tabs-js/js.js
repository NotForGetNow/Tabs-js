

const button = document.querySelectorAll('.tabs__nav-btn')
const tab = document.querySelectorAll('.tabs__item')

button.forEach(buttonEL => {
    buttonEL.addEventListener('click', ()=> {
        const currentButton = buttonEL.getAttribute('data-tab')
        const currentTab = document.querySelector(currentButton)
        removeEl(tab)
        currentTab.classList.add('active')

        removeEl(button)
        buttonEL.classList.add('active')
        
    })
})

function removeEl(elements) {
    elements.forEach(element => {
        element.classList.remove('active')
    })
}




tabCount = tab.length


function addContent(content){
    let newContent = document.createElement('div')
    newContent.classList.add('"tabs__item active"')
    newContent.id.add(tabCount + 1)
    
    let newP = document.createElement('p')
    newP.document.add(content) 

    newContent.appendChild(newP)
    
} 