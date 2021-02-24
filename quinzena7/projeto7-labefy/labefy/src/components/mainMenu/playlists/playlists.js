import React from 'react'


const BuscarPlaylists = (props) => {
  
    return (
      <div>
        <h3>Veja aqui suas Playlists!</h3>
        {/* <input value={props.valorInput} onChange={props.onChangeBusca}/> */}
        <button onClick={props.onClickBuscar}>Buscar</button>
      </div>
    )
  }

export default BuscarPlaylists;