import Papa from 'papaparse'
import { useEffect, useState } from "react"


export interface Plato {
      id: string
      categoria: string
      nombre: string
      descripcion: string
      imagen: string
      precio: string
      opcional: string
      alergenos: string
      badge: string
}

const useMenuData = () => {

      const [menuData, setMenuData] = useState<Plato[]>([])
      const [error, setError] = useState<string | null>(null)
      const [loading, setLoading] = useState(true)

      const getMenu = async () => {
            try {
                  setLoading(true)
                  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQjs_qQbemYFvQZhBiAnMTlxYVV8t2dFrdv6ZYVzidz_wqCL1mTV4kwGH3nzWdl25wtgT_doOPKL-0h/pub?output=csv')
                  const data = await response.text()
                  const dataMenu = Papa.parse<Plato>(data, { header: true })
                  setMenuData(dataMenu.data)
                  setLoading(false)
                  return data
                  
            } catch (error) {
                  console.log("Error", error)
                  setLoading(false)
                    setError(error instanceof Error ? error.message : 'Error desconocido')

            }
            
      }

      useEffect(() => {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            getMenu()
      }, [])


      return [menuData, loading, error] as const
}

export default useMenuData