let data = [1,2,6,1,2,5,9,'33','33'];

const result = [];
data.forEach((item)=>{
    //pushes only unique element
    if(!uniqueArr.includes(item)){
        uniqueArr.push(item);
    }
})
console.log(result);