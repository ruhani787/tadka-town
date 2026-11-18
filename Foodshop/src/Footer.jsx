// import React from 'react'

// const Footer = () => {
//   const fruits=[{id:1, name:"apple",price:299},
//     {id:2, name:"mango",price:399},
//     {id:3, name:"cherry",price:199},
//     {id:4, name:"litchi",price:99},
//   ]
//  const allfruit=fruits.map(fruit=>{
//     return <li key={fruit.id}> {fruit.name}={fruit.price}</li>
//   })


//     const lowrange=fruits.filter(fruit=> fruit.price <= 200 )
//    const listFruit=lowrange.map(fruit =>  {
//     return <li key={fruit.id}> {fruit.name}={fruit.price}</li>
//    })  


//    const highrange=filter(fruit=>fruit.price>=100)
//    const hiiFruit=lowrange.map(fruit =>  {
//     return <li key={fruit.id}> {fruit.name}={fruit.price}</li>
//    })  
 
//   return (
//    <div className='p-5 bg-flex gap-12'>
//     <div>
//      <h1>All Fruits</h1>
//      <ul className='list-decimal'>{allfruit}</ul>
  
//      </div>
//     <div >
//     <h1>SasteFruits:</h1>
//      <ul className='list-decimal'> {listFruit}</ul>
//      </div>
//      <div>
//       <h1>Mehnge Fruits</h1>
//        <ul className='list-decimal'> {listFruit}</ul>
//      </div>
     
//    </div>
//   )
// }

// export default Footer