
const obj = {
    a: "somepath1",
    b: "somepath2",
    c: "somepath3"
}

document.getElementById("tree-root").textContent = "root\\goes\\here"
document.getElementById("tree-body").innerText = window.treeify.asTree(obj, true);


// https://www.htmlsymbols.xyz/box-drawing
const regex = /^[\u2500\u2502\u2514\u251c\s]+/
