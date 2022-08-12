import Styles from './Carro.module.css'

const Carro = ({id, model, brand, km, newCar}) => {
  return (
    <div className={Styles.card}>
        <ul className={Styles.ul_carro}>
            <li className={Styles.li_carro}>{model}</li>
            <li className={Styles.li_carro}>{brand}</li>
            <li className={Styles.li_carro}>{km}</li>
            <li className={Styles.li_carro}>{newCar ? "Novo": "Usado"}</li>
        </ul>
    </div>
  )
}

export default Carro