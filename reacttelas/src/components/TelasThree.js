import "./TelasThree.css";
import myimg3 from "../img/Ecommerce campaign-cuate 1.svg";

const TelasThree = ({telThree}) => {
  return (
    <div className='Tthree'>
        <img src={myimg3} alt="Imagem terceira" className="imgem"/>
        <header className="textTelaOne">
          <h1>Buy & Sell Tools</h1>
          <p>Buy & sell good quality products for your beautiful plants</p>
        </header>
        <button onClick={telThree}>Continue</button>
        <p onClick={telThree} className='botao2tel3'>Skip</p>
    </div>
  )
}

export default TelasThree