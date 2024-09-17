// code your solution here
console.log(saturdayFun("bathe my dog"))
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (work = "go to the office") => {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(special = "*") {
    return function (adjective = "special") {
        return `You are ${special}${adjective}${special}!`
    }
}

