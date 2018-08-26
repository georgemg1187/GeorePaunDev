//Set Age starts here -----------------------
var myBirthday = 'November 08, 1987 10:10:00';

function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
  }

var ageNode = document.getElementById('age');
ageNode.textContent = calcAge(myBirthday);
//Set Age ends here -------------------------


var abilities = ['bootstrap', 'css', 'git', 'hithub', 'html', 'JSLogo', 'json', 'php', 'python', 'sass', 'seo', 'wordpress', 'xml'];
var abilitiesRows = Array.prototype.slice.call(document.querySelectorAll('.ab-container'));

function createRombs(element) {
    var romb = document.createElement('div');
    romb.classList.add('romb');
    
    var rombContent = document.createElement('p');

    element.appendChild(romb);
    romb.appendChild(rombContent);
}

// function grid(htmlNode, row, column)  {
//     this.htmlNode = htmlNode;
//     this.row = htmlNode.innerWidth;
//     this.column = column;
// }

console.log(document.querySelector('#abilities .container-l').offsetWidth)