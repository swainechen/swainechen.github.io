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

function lessThan600px(mediaQuery) {
    if (mediaQuery.matches) {
        // Header
        removeClassById("header-text", "u-size7of8")
    } else {
    }
}

// Our Vision - emoji cards
function lessThan900px(mediaQuery) {
    if (mediaQuery.matches) {
        // Vision section
        removeClassByClass("emoji-card", "u-size1of3")
        addClassByClass("emoji-card", "sizeFull")
        addClassByClass("emoji-card", "center-margin")

        // Research section
        removeClassByClass("Research-card", "u-size5of12")
        removeClassByClass("Research-card", "u-after1of12")
        addClassByClass("Research-card", "sizeFull")

        // Twitter timeline
        removeClassByClass("timeline-cell", "u-size1of2")
        addClassByClass("timeline-cell", "sizeFull")
        addClassByClass("timeline-cell", "center-margin")

        // Publications
        removeClassByClass("Paper-card", "u-size1of3")
        removeClassByClass("Paper-card", "u-size2of3")
        addClassByClass("Paper-card", "sizeFull")
        addClassByClass("Paper-card", "center-margin")

        // People
        removeClassByClass("Person-card", "u-size1of4")
        removeClassByClass("Person-card", "u-size3of4")
        removeClassByClass("emoji-img", "large-margin")
        addClassByClass("Person-card", "sizeFull")
    } else {
        // Vision section
        addClassByClass("emoji-card", "u-size1of3")
        removeClassByClass("emoji-card", "sizeFull")
        removeClassByClass("emoji-card", "center-margin")

        // Research section
    }
}

