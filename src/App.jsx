
import './App.css';

// const App = () => {
//   const items = [
//     { name: 'Milk', purchased: true },
//     { name: 'Bread', purchased: false },
//     { name: 'Eggs', purchased: true },
//   ];

//   return (
//     <>
//       <h1>Shopping List</h1>
//       <ul>
//         {items.map((item, index) => (
//           // مهمم اذا تحقق شرط يطبق كلاس معين اذا ماتحقق يطبق شرط اخر 
//           <li key={index} className={item.purchased ? 'completed' : 'not-completed'}> 
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }



// ------------------------------------------Movie watch----------------------------------------
const App = () => {


  const Movies = [

    { name: 'Harry Boter', watch: true },
    { name: 'Game of Throns', watch: true },
    { name: 'The Boys', watch: true },
    { name: 'Mr Ben', watch: false },
    { name: 'Batman :The dark night ', watch: false },
  ]
  const allmovies = Movies.map((item, index) => (
    <li key={index} className={item.watch ? 'completed' : 'not-completed'}>
      {item.name}
    </li>
  ))

  return (
    <>
      <h1>Movie list </h1>
      <ul>

        {allmovies}
      </ul>
    </>
  )
}

export default App;