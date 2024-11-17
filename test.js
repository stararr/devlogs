for (code of document.getElementsByTagName("code")) {
    console.log("hi", code)
    code.innerHTML = code.innerHTML.trim()
}