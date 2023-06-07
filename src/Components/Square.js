import oMarker from '../images/icon-o.svg';
import xMarker from '../images/icon-x.svg';
import "./square.css"
const Square  = ({value, onClick}) => {
  const style = value === 'X' ? <img className='box' src= {xMarker} alt="x" ></img>
  : value === "O" ?  <img className='box'  src= {oMarker} alt="o" ></img>
  : <button className='box' onClick={onClick}>{value}</button>

  return (
    <div>
      {style}
    </div>
  )
};
export default Square
