interface BackDropProps{
  onClick:() => void;
}

const BackDrop:React.FC<BackDropProps> = ({onClick}) => {
  return ( <div onClick={onClick} className="fixed top-0 left-0 h-screen w-screen "></div> );
}
 
export default BackDrop;