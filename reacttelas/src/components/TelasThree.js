import "./TelasThree.css";

const TelasThree = ({telThree}) => {
  return (
    <div className='Tthree'>TelasThree
        <button onClick={telThree}>Continue</button>
        <p onClick={telThree} className='botao2tel3'>Skip</p>
    </div>
  )
}

export default TelasThree