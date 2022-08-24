import Header from '../header/header'

import './App.css';


const select_valute = document.querySelector('.select-valute')

// if(select_valute.value === 'UAH'){
//   console.log('ok')
// }else{
//  console.log('error')
// }
async function GetApi(url){
  await fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
}
GetApi()


function App() {
  return (
    <div>
      <Header/>

    </div>

  );
  
}

export default App;
