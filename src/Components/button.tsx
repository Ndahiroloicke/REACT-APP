
interface Props{
    children:string;
    onclick: ()=> void;
    color?: string;
}

const Button = ({children,onclick,color = "primary"}:Props) => {
  return (
    <div className={'btn btn-'+ color} onClick={onclick}>{children}</div>
  )
}

export default Button;