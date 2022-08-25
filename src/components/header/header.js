import './header.css'
import ConvertInput  from'./header-script'

const Header = () =>{
    
    return(
        <div className='container'>
            <div className="container-header ">
                <h2>Конвертер Валют: (UAH , USD , EUR) </h2>
           
    
            <div className='select-body'>
                <select name="valute" className='select-valute'>
                    <option value="UAH/USD">UAH/USD</option>
                    <option value="EUR/USD">EUR/USD</option>
                    <option value="UAH/EUR">UAH/EUR</option>
                </select>
            </div>

            <div className='body-input'>
                <input onInput={ConvertInput} type="number" className='input-valute' placeholder="Number"/>
                <div className="result">Результат:</div>
                
            </div>
        </div>
       
        </div>
    )
}

export default Header