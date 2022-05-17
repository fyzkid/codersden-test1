// question 1

let nums= [1,2,3,4,5,6,7,8,9,10,11,12]
let arr=[]
for (let i=nums.length-1; i>=0; i--){
    arr.push(nums[i])  
}
console.log(arr)


let sum = 0

for(i=0; i<arr.length; i++){
    sum+=arr[i]
}
console.log(sum)

if (arr.length>10 && arr.length%2===0){
    let newArr = arr.slice(6,12)
    let sum = 0
    for(i=0; i<newArr.length; i++){
        sum+=newArr[i]
    }

    console.log(sum)
    console.log(newArr)

        

    function firstFunction() {
        let lastArr = newArr.slice(3, 6)
        console.log(lastArr)

        let product = 2
        for (i = 0; i < lastArr.length; i++) {
            product*=lastArr[i]
        }
        
        console.log(product)
    }
    firstFunction()
}
else{
    console.log('error')
}









// question 2
let place = '    abuja is a state '
place = place.toUpperCase()
place = place.trim()
console.log(place)

let reduction= place.substring(0,4)


if (reduction.length<4){
    console.log('error')
}
else{
    console.log(reduction)
}























