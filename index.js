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
    })

/* Fetch colors array from API */
function getColors(schemeValue, hexValue){
    const url = `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${schemeValue}`
    // console.log(url)
    fetch(url, {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        (data.colors).forEach(color => {
            colorArray.push(color.hex.value)
        })
        // console.log(colorArray)
    })}

// console.log(hexValue)
// console.log(schemeValue)
// console.log(colorArray);

/* Render colors to DOM */
