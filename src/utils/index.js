export const isSmallScreen = () => {
  return window.innerWidth <= 768 ? true : false
}



export const generateThumbURL = (thumbnail) => {
  return `${thumbnail.path}/standard_medium.${thumbnail.extension}`
}