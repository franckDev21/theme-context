import React, { ChangeEvent, FC, useContext } from 'react'
import ThemeContext from '../ThemeContext'

type ThemeChoiseProps = {}
const ThemeChoise:FC<ThemeChoiseProps> = () => {

  const contextValue = useContext(ThemeContext)

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    contextValue.updateTheme(e.target.value)
  }

  return (
    <select onChange={handleChange} defaultValue={contextValue.theme}>
      <option value="dark">dark</option>
      <option value="light">light</option>
    </select>
  )
}

export default ThemeChoise