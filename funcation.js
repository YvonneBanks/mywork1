function ageCounter(curentyear, birthyear){
    var age = curentyear - birthyear
    return age
}

var result = ageCounter(2018,1997)
console.log (result)

function moneyCounter(curentmoney,spentmoney){
    var money = curentmoney - spentmoney
    return money
}
var result = moneyCounter(1000000,500000)
console.log(result)


function myNames(lastname,middlename){
    return lastname.concat(middlename)

}
var result = myNames("Yvonne","Prisca")
console.log(result.length)