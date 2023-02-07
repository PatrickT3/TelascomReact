import "./TelasOne.css";
import myimg from "../img/Online world-pana (1) 1.svg";

function TelasOne({inicio}) {
  return (
    <div className='Tone'>
        <img src={myimg} alt="Imagem primeira" className="imgem"/>
        <header className="textTelaOne">
          <h1>Plant lover Community</h1>
          <p>Find gardening enthusiasts from all over the world</p>
        </header>
        <button onClick={inicio}>Continue</button>
        <p onClick={inicio} className='botao2'>Skip</p>
    </div>
  )
}

export default TelasOne