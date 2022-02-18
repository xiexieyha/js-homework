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

//problem 6

function validateCards(strlist1, strlist2) {
    var result = { card: strlist1, isValid: false, isAllowed: false };
    let cardNumArray = Array.from(strlist1);
    let double_each_number = cardNumArray.map((num) => num * 2);
    let sum = cardNumArray.reduce((sum, num) => sum + num);
    if (sum % 10 === 8) {
        result.isValid = true;
    }
    let bannedPrefixes = strlist2.split(',');
    for (let i = 0; i < bannedPrefixes.length; i++) {
        if (!strlist1.startsWith(bannedPrefixes[i])) {
            result.isAllowed = true;
        }
    }
    return result;
}

console.log(validateCards('6724843711060148', '11, 3434, 67453, 9'));




//problem 7


function validatingEmail(str) {
    if (str.pattern = /[a-z]{1,6}_{0,1[0-9]{0,4}@hackerrank\.com)/) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validatingEmail('julia@hackerrank.com'));
console.log(validatingEmail('julia_@hackerrank.com'));
console.log(validatingEmail('julia_0@hackerrank.com'));
console.log(validatingEmail('julia0_@hackerrank.com'));
console.log(validatingEmail('julia@gmail.com'));


