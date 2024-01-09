interface ContainerProps{
  children:React.ReactNode;
}
const Container:React.FC<ContainerProps> = ({children}) => {
  return ( <div className="
  max-w-[1920px]
 
 
  xl:px-20
  md:px-2
  ">
    {children}
  </div> );
}
 
export default Container;