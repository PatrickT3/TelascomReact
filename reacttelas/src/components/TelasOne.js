import "./TelasOne.css";

function TelasOne({inicio}) {
  return (
    <div className='Tone'>TelasOne
        <button onClick={inicio}>Continue</button>
        <p onClick={inicio} className='botao2'>Skip</p>
    </div>
  )
}

export default TelasOne