import React from 'react'
import UpLoadForm from './components/UpLoadForm'

const UpLoadRecipe = () => {
  return ( 
    <div className='max-w-xl mx-auto px-8'> 
    <h1 className='text-3xl font-bold text-gray-800 mb-8 mt-8 bg-green-300 bg-opacity-25 p-10'>
      Create Recipe
      <UpLoadForm />
      </h1>
    </div>
  )
}

export default UpLoadRecipe 



//gradient experiment 
// import React from 'react';
// import UpLoadForm from './components/UpLoadForm';
// import styles from './UpLoadRecipe.module.css'; // Import CSS file for styles

// const UpLoadRecipe = () => {
//   return ( 
//     <div className={`max-w-xl mx-auto px-4 ${styles.container}`}>
//       <h1 className={`text-3xl font-bold text-gray-800 mb-8 ${styles.title}`}>
//         Create Recipe
//         <UpLoadForm />
//       </h1>
//     </div>
//   );
// }

// export default UpLoadRecipe;


