
type Props = {
   children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
   
      <h1 className="basis-3/5 font-montserrat md:text-3xl  text-xl font-bold justify-center flex">
         { children }
      </h1>
  
  )
}

export default HText;