// This file contains dates connection and footer incrementing year

let weekArr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const dt = new Date()
// console.log(dt)

date.innerHTML = dt.toLocaleDateString()
dayTime.innerHTML = weekArr[dt.getDay()]


//footer year
// console.log(dt.getFullYear())
document.getElementById('inc-year').innerHTML = dt.getFullYear() 

