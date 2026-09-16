import Container from '../../../../components/atoms/Container'
import Header from '../../../../components/organisms/Header'
import Footer from '../../../../components/organisms/Footer'
import NavMenu from './NavMenu'
import NavFilterMenu from './NavFilterMenu'
import { useEffect, useRef, useState } from 'react'
import MenuList from './MenuList'
import useMenuData from '../../../../hooks/useMenuData'
import Loading from '../../../../components/molecules/Loading'
import Error from '../../../../components/molecules/Error'


const Menu = () => {
      const [select, setOnSelect] = useState('toda la carta')
      const [menuData, loading, error] = useMenuData()

      const filtroRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
            filtroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, [select])

      return (
            <Container>
                  <Header />
                  <section ref={filtroRef} className=" px-3 mt-16 ">
                        <NavMenu />
                        <NavFilterMenu textBtn={select} changeTextBtn={setOnSelect} />
                        {
                              loading && (
                                    <Loading />
                              )
                        }
                        {
                              error && (
                                    <Error error={error} />
                              )
                        }
                        <section className={ ` flex flex-col items-center gap-8 mt-44 pb-12` }>
                              {!loading && !error && menuData
                                    .filter((itemMenu) => select === 'toda la carta' || itemMenu.categoria === select)
                                    .map((itemMenu) => (
                                          <MenuList key={itemMenu.id} itemMenu={itemMenu} />
                                    ))}

                        </section>
                  </section>
                  <Footer />
            </Container>
      )
}

export default Menu