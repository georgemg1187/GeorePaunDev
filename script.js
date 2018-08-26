var abilities = ['CSS', 'HTML', 'JSON', 'PHP', 'XML', 'JS', 'SEO', 'WP', 'SASS'];
var abilitiesRows = Array.prototype.slice.call(document.querySelectorAll('.ab-container'));

function createRombs(element) {
    var romb = document.createElement('div');
    romb.classList.add('romb');
    
    var rombContent = document.createElement('p');

    element.appendChild(romb);
    romb.appendChild(rombContent);
}

function grid(htmlNode, row, column) {
    this.htmlNode = htmlNode;
    this.row = htmlNode.innerWidth;
    this.column = column;
}

console.log(document.querySelector('#abilities .container-l').offsetWidth)