import $ from "jquery"
import "./app2.css"

const $tabBar = $(".app2 .tabBar")
const $content = $(".app2 .content")
$tabBar.on("click", "li", (e) => {
    const $li = $(e.currentTarget)
    const index = $li.index()

    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected")

    $content
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active")
})

$tabBar.children().eq(0).trigger("click")