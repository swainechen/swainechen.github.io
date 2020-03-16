// Changes height of target to newHeight

function changeHeightByClass(target, newHeight) {
    var elements = document.getElementsByClassName(target)
    var i
    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute("data-height", newHeight)
        elements[i].style.height = newHeight
    }
}

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

        // intro
        removeClassById("publicity-intro", "u-before1of4")
        removeClassById("publicity-intro", "u-after1of4")
        removeClassById("publicity-intro", "u-size1of2")
        addClassById("publicity-intro", "u-sizeFull")
    } else {
        // Header
        addClassById("header-text", "u-size7of8")
    }
}
