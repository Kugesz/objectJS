console.log(isEmpty({}));
console.log(isEmpty({name: "John" }));

function isEmpty(obj){
    if(Object.keys(obj).length > 0){
        return true;
    }else {
        return false;
    }
}