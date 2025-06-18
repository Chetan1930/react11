import React from 'react'

const Js = () => {

    const arr1= [1,2,3,4,4,5,6,6,7];
    const arr2 =[];
  return (

    <>
    <div>Original Array is : {arr1}</div>

    <div>After Removing Duplicates : </div>

    {
        console.log(arr1.map( (val)=>{
            
            if(!(arr2.includes(val))){
                arr2.push(val);
            }

            return <h1>{arr2}</h1>;
            
        }))
    }
    </>
  )
}

export default Js