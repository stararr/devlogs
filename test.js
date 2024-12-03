function elem(id) {
    return document.getElementById(id)
}

for (code of document.getElementsByTagName("code")) {
    console.log("hi", code)
    code.innerHTML = code.innerHTML.trim()
}

/*padding: 0 2rem;
border: none;*/

var cur
function toggleCode(button) {
    console.log(button.nextElementSibling.style)
    switch (button.nextElementSibling.style.display) {
        case 'block' || '':
            console.log('hi')
            button.nextElementSibling.style.maxHeight = '0';
            button.nextElementSibling.style.padding = '0 2rem';
            button.nextElementSibling.style.border = 'none';
        case 'none':
            console.log("HELLO")
            button.nextElementSibling.style.maxHeight = '';
            button.nextElementSibling.style.padding = '';
            button.nextElementSibling.style.border = '';
    }
}

var copynotif = elem("copynotif")
Array.from(document.getElementsByClassName("clipboard")).forEach(clipboard => {
    clipboard.addEventListener("click", function(e) {
        console.log('clicked')
        navigator.clipboard.writeText(clipboard.parentElement.innerText)
        copynotif.style.filter = "opacity(1)"
        window.setTimeout(() => {
            copynotif.style.filter = "opacity(0)"
        }, 1250);
    })
})