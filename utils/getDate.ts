export const getDate = (f?: 'isows' | 'iso' | 'number') => {
  const date = new Date
  if (f === 'iso') {
    console.log(date.toISOString().substring(0, 16))
    return date.toISOString().substring(0, 16)
  } else if (f === 'isows') {
    return date.toISOString()
  } else if (f === 'number') {
    return Date.now()
  } else {
    return date.toString()
  }
}