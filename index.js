// code your solution here
console.log(saturdayFun("bathe my dog"))
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(mondayWork("work from home"))
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(activity = "*") {
    return function (adjective = "special") {
        return `You are ${activity}${adjective}${activity}!`
    }

}