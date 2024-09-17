import PropTypes from "prop-types";
import './button.css'

const alertLabel = () => {
  alert('A label desse botão é Baixar CV ')
};

const Button = ({ label = 'Baixar CV' }) => {
  return (
    <button className="btn" onClick={alertLabel}>{label}</button>
  )
}

Button.propTypes = {
 label: PropTypes.string,
 alertLabel:PropTypes.func,
};

export default Button