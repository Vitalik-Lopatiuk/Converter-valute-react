import './header.css'

const Header = () =>{
    return(
        <div className='container'>
            <div className="container-header ">
                <h2>Конвертер Валют: (UAH , USD , EUR) </h2>
           
      
            <div className='select-body'>
                <select name="valute" className='select-valute'>
                    <option value="UAH">UAH</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>

            <div className='body-input'>
                <input type="text" className='input-valute' placeholder="Number"/>
                <div className="result"></div>
            </div>
        </div>
       
        </div>
    )
}

export default Header