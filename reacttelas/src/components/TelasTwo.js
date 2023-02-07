import "./TelasTwo.css";
import myimg2 from "../img/In no time-pana 1.svg";

const TelasTwo = ({telTwo}) => {
  return (
    <div className="Ttwo">
      <img src={myimg2} alt="Imagem segunda" className="imgem"/>
      <header className="textTelaOne">
          <h1>Get fast & safe delivery</h1>
          <p>Get good quality products for your plants </p>
        </header>
      <button onClick={telTwo}>Continue</button>
      <p onClick={telTwo} className='botao2tel2'>Skip</p>
    </div>
  )
}

export default TelasTwo