
export const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Esse é titulo do container</h2>
        {children}
        <p>Valor: {myValue}</p>
    </div>
  )
}

export default Container;