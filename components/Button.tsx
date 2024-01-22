type ButtonProps = {
    type: 'button' |    
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button type="button">
        Click me
    </button>
  )
}

export default Button