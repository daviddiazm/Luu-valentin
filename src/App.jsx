import { useEffect, useState } from 'react'
import './App.css'
import BotonMovible from './components/BotonMovible/BotonMovible'
import BotonPosicion from './components/BotonPosicion/BotonPosicion'

function App() {
  const [nuevaPosX, setNuevaPosX] = useState(null)
  const [nuevaPosY, setNuevaPosY] = useState(null)
  const [yesClick, setYesClick] = useState(false)
  const [indecrement, setIndecrement] = useState(16)
  const [firstSayYes, setFirstSayYes] = useState(false)

  const sendPos = (x, y) => {
    setNuevaPosX(x)
    setNuevaPosY(y)
  }

  const indecrementValue = () => {
    const newIndeCrem = indecrement * 4
    setIndecrement(newIndeCrem)
    console.log({ newIndeCrem, indecrement });

  }



  return (
    <>

      <div className='texto-btns1'>


        {
          !firstSayYes &&
          <div>
            <p className='texto'>Hola Luu puedo ser tu valentin? :D</p>
            <div className='buttons_container'>
              <button onClick={() => { setFirstSayYes(true) }} style={{ fontSize: indecrement }}>si</button>
              <button onClick={() => { indecrementValue() }} >no</button>
            </div>
          </div>
        }


        {
          firstSayYes &&
          <div>
            {
              !yesClick? (<p className='texto'  >Segura? 🤨</p>) :
              (<p className='texto'  >Muchas Graciass Luuu ❣️❣️❣️</p>)
            }
            {nuevaPosX ? <BotonMovible nuevaPosX={nuevaPosX} nuevaPosY={nuevaPosY} /> : ""}
            <div className='buttons_container'>
              <div onClick={() => setYesClick(true)}> 
                <BotonPosicion sendPos={sendPos} />
              </div>
              <button className='boton_invisible'>a</button>
              {yesClick ? <img className='capi-si' src="https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2016/02/peces-beso.gif?x39313" alt="" /> : ""}
            </div>
          </div>
        }


        <img className='capi' src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-1080.gif" alt="" srcSet="" />


      </div>



    </>
  )
}

export default App





// <div className='texto-btns2'>
//   <p className='texto'>Hola Luu puedo ser tu valentin? :D</p>
//   {nuevaPosX ? <BotonMovible nuevaPosX={nuevaPosX} nuevaPosY={nuevaPosY} /> : ""}
//   <div className='buttons_container'>
//     <div onClick={() => setYesClick(true)}> {/* Aquí se utiliza una función de flecha que llama a setYesClick(true) */}
//       <BotonPosicion sendPos={sendPos} />
//     </div>
//     <button className='boton_invisible'>a</button>
//   </div>
//   <img className='capi' src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-1080.gif" alt="" srcSet="" />
//   {yesClick ? <img className='capi-si' src="https://img1.picmix.com/output/pic/normal/2/9/0/2/10592092_f0c06.gif" alt="" /> : ""}
// </div>
