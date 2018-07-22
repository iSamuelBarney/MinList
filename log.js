const DEV_MODE = true

const log = (...all) => {
  if (DEV_MODE) {
    console.log(all)
  } else {
    return null
  }
}
export default log
