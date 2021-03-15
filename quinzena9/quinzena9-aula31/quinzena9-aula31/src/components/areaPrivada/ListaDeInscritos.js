import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { Lista } from '../areaPublica/headerStyles'


const ListaIncritos = () => {
    useProtectedPage()

    return(
        <div>
            HEY HO LET'S GO
        </div>
    )
}

export default ListaIncritos;