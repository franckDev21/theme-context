import React, { ChangeEvent, FC, useContext } from 'react'
import ThemeContext from '../ThemeContext'

type ThemeChoiseProps = {}
const ThemeChoise:FC<ThemeChoiseProps> = () => {

  const { theme, updateTheme } = useContext(ThemeContext)

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    updateTheme(e.target.value)
  }

  return (
    <select onChange={handleChange} defaultValue={theme}>
      <option value="dark">dark</option>
      <option value="light">light</option>
    </select>
  )
}

export default ThemeChoise