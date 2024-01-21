const submitForm = document.getElementById("submit-btn")
const schemeId = document.getElementById("scheme")
const hexId = document.getElementById("hex-color")

let colorArray = []
let hexValue = ''
let schemeValue = ''

/* Grad color and color scheme from form */
submitForm.addEventListener('click', (event) => {
    event.preventDefault()
    const schemeValue = schemeId.value
    const hexValue = hexId.value.substring(1)
    getColors(schemeValue, hexValue);
    colorArray = [];
    console.log(colorArray)
    })

/* Fetch colors array from API */
function getColors(schemeValue, hexValue){
    const url = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${schemeValue}`
    fetch(url, {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        (data.colors).forEach(color => {
            renderColors(color)
        })
        // console.log(colorArray)
    })}

/* Render colors to DOM */
function renderColors(color){
    const parent = document.getElementById('color-container')
    const parentHexValue = document.getElementById('hex-value-name')
            parent.innerHTML = ''
            colorArray.push(color.hex.value)
            for (let i = 0; i < colorArray.length; i++) {
                const child = document.createElement('div')
                child.className = "color-output"
                child.id = `child-${i+1}`
                child.style.backgroundColor = colorArray[i]        
                parent.appendChild(child)
                const childHexContainer = document.createElement('div')
                childHexContainer.className = "child-hex-container"
                childHexContainer.id = `child-hex-container-${i+1}`
                childHexContainer.innerText = colorArray[i]
                child.appendChild(childHexContainer)
                console.log(parent)                
            }
            
}

