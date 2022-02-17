//problem 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;

for (var i = 0; i<salaries.length; i++) {
        sum += salaries[i];
}
   
console.log(sum);


//problem 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (var i = 0; i<menu.length; i++ ) {
        if (typeof menu[i] == 'number') {
            menu[i] *= 2;
        }
    }
        
}


//problem 3

function checkEmailId(str) {
	if (str.includes('@') && str.includes('.')) {
        if (str.match(/@(?=[a-z].)/i)) {
            return true;
        }
    }
    return false;
}

console.log(checkEmailId(str));


//problem 4

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength-1) + '...';
    }
    return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));



//problem 5

let array = ['James', 'Brennie']
console.log(array);
array.push('Robert')
console.log(array);
array[Math.floor((array.length - 1) / 2)] = 'Calvin'
console.log(array);
array.shift()
console.log(array);
array.unshift('Rose', 'Regal')
console.log(array);