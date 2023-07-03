import PropTypes from 'prop-types'; 

export function Button({text, name}) {
    if(!text) console.log("Se esperaba un texto")
    return <button>{text} - {name}</button>;
  }
  
Button.propTypes ={
    text: PropTypes.string
}

/*Definir un valor por defecto*/
Button.defaultProps={
  name: 'Some User'
}