import { createContext, useState } from 'react'

const StoreContext = createContext()

function StoreProvider({ children }) {
  const [cartCount, setCartCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(0)
  const [productActive, setProductActive] = useState()

  const handleProductDetailVisibility = (status) => {
    setIsProductDetailOpen(status)
  }

  const handleProductActive = (product) => {
    setProductActive(product)
  }

  return (
    <StoreContext.Provider
      value={{
        cartCount,
        isProductDetailOpen,
        productActive,
        handleProductActive,
        setCartCount,
        handleProductDetailVisibility,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export { StoreProvider, StoreContext }
