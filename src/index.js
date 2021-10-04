
window.data = {
    a: "somepath1",
    b: null,
    c: "somepath3"
}

// Establish CSS classes for the different parts of the text
const cssClass = {
    "treeRoot": "tree-root",
    "branch": "tree-branch",
    "branchLines": "tree-branch-lines",
    "branchName": "tree-branch-name",
    "branchText": "tree-branch-text"
};

// Get the tree structure as text
const tree = treeify.asTree(window.data, true).replace(/\n$/, '').split('\n');

// Create a new element for the tree root
const root = document.createElement('div');
root.classList.add(cssClass.treeRoot);
root.textContent = 'root\\goes\\here';
document.getElementById('tree').appendChild(root);

// Iterate over the lines of text in the tree, adding elements for each
tree.forEach(item => {
    
    // Construct a regular expression to capture the characters that make the branches; see https://www.htmlsymbols.xyz/box-drawing
    const regex = /^[\u2500\u2502\u2514\u251c\s]+/;
    const branchLines = regex.exec(item)[0];
    const text = item.substr(branchLines.length)
    let branchName = '';
    let branchText = '';
    const index = text.indexOf(': ');
    if (index>0){
        branchName = `<span class=${cssClass.branchName}>${text.substring(0,index)}: </span>`;
        branchText = `<span class=${cssClass.branchText}>${text.substr(index+2)}</span>`;
    }
    else{
        branchName = `<span class=${cssClass.branchName}>${text}</span>`;
    }
    const div = document.createElement('div');
    div.innerHTML = `<span class=${cssClass.branchLines}>${branchLines}</span>${branchName}${branchText}`;
    div.classList.add(cssClass.branch)
    document.getElementById('tree').appendChild(div);
});

