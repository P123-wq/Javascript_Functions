// I am Displaying both inbuilt and user defined function for these 4 functions
let tables=[20,40,55,70,87,100];
//foreach  -- Example - Print Array Elements and count
//with inbuilt function

tables.forEach((element, index,array)=>{
    console.log(index+1,element);
})

console.log('\n');
//user 

function user_foreach(array, callbackfun_foreach){
    for(let i=0;i<array.length;i++){
        callbackfun_foreach(array[i],i);
    }
}
callbackfun_foreach=(n,i)=>{
    console.log(i+1, n);
}
user_foreach(tables,callbackfun_foreach);

console.log('\n');



//map --- Example-Double the values of elemnts of array

//with in built function
number=tables.map(n=>n*2);
console.log(number);
console.log('\n'); 


//user defined
function user_map(array,callback_map){
    let num=[];
    for(let i=0;i<array.length;i++){
        new_element=callback_map(array[i]);
        num.push(new_element);
    }
    return num;
}

callback_map=(n1)=>{
   this.n1=n1;
   return this.n1*2;
}
console.log(user_map(tables,callback_map));


console.log('\n');




//filter ---- Example- filter elemnts which are divisible by 5
//inbuilt function
let result=tables.filter(n=>n%5===0);
console.log(result);
console.log('\n');

//user defined
function user_filter(array,callback_filter){
    let fil_tables=[];
    for (let i=0;i<tables.length;i++){
        new_ele=callback_filter(array[i]);
        if(new_ele)
                fil_tables.push(new_ele);
         
    }
    return fil_tables;

}
callback_filter=(n2)=>{
    this.n2=n2;
    if(n2%5===0)
    return (n2);
  

}
console.log(user_filter(tables,callback_filter));
console.log('\n');







//reduce--- Example-Sum of elements of array
//inbuilt function
let s=0;
let sum_tables=tables.reduce((pre_val,curr_val)=>pre_val+curr_val,s);
console.log(sum_tables);
console.log('\n');


//user defined reduce
function user_reduce(array,callback_reduce){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=callback_reduce(sum,array[i]);
    }
    return sum;
}

callback_reduce=(n3,table_ele)=>{
    this.n3=n3;
    this.table_ele=table_ele;
return(n3+table_ele);
}

console.log(user_reduce(tables,callback_reduce));
console.log('\n');

