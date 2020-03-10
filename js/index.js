// Changes height of target to newHeight

function changeHeightByClass(target, newHeight) {
    var elements = document.getElementsByClassName(target)
    var i
    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute("data-height", newHeight)
        elements[i].style.height = newHeight
    }
}

function changeWidthByClass(target, newWidth) {
    var elements = document.getElementsByClassName(target)
    var i
    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute("width", newWidth)
        elements[i].style.width = newWidth
    }
}

// Creates DOM element for Twitter follow text/link on home page
// So we can switch the order when we move to mobile
var textCell = document.createElement('div')
textCell.classList.add("Grid-cell", "u-size5of12", "u-before1of12")
textCell.id = "twitter-link"
var heading = document.createElement("h1")
heading.classList.add("small-title", "mega-margin", "twitter-link")
// Normal text in heading
var headingText = document.createTextNode("Follow on Twitter: ")
var link = document.createElement("a")
// Link text in heading
var linkText = document.createTextNode("@swaine_chen")
link.appendChild(linkText)
link.setAttribute("target", "_blank")
link.setAttribute("href", "https://twitter.com/swaine_chen")
heading.appendChild(headingText)
heading.appendChild(link)
textCell.appendChild(heading)

var timeline = document.getElementById("twitter-timeline")
var parent = timeline.parentNode

// Media queries

if (matchMedia) {
    var mediaQuery600 = window.matchMedia("(max-width: 600px)")
    lessThan600px(mediaQuery600)
    mediaQuery600.addListener(lessThan600px)

    var mediaQuery900 = window.matchMedia("(max-width: 900px)")
    lessThan900px(mediaQuery900)
    mediaQuery900.addListener(lessThan900px)
}

//General mobile changes
function lessThan600px(mediaQuery) {
    if (mediaQuery.matches) {
        // Header
        removeClassById("header-text", "u-size7of8")

        // Timeline Height
        changeHeightByClass("twitter-timeline", "450px")
        
        // Follow Us @swaine_chen
        parent.insertBefore(textCell, timeline)
        removeClassById("twitter-link", "u-size5of12")
        removeClassById("twitter-link", "u-before1of12")
        addClassById("twitter-link", "center-text")

    } else {
        // Header
        addClassById("header-text", "u-size7of8")

        // Timeline Height
        changeHeightByClass("twitter-timeline", "700px")

        // Follow Us @swaine_chen
        parent.insertBefore(textCell, timeline.nextSibling)
        addClassById("twitter-link", "u-size5of12")
        addClassById("twitter-link", "u-before1of12")
        removeClassById("twitter-link", "center-text")

    }
}
