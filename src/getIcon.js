function getDayIcon(num) {
  switch (num) {
    case '01':
      return 'day'
    case '02':
      return 'cloudyDay'
    case '10':
      return 'rainSun'
    default:
      return 'error loading day icons'
  }
}

function getNightIcon(num) {
  switch (num) {
    case '01':
      return 'night'
    case '02':
      return 'cloudyNight'
    case '10':
      return 'rainNight'
    default:
      return 'error loading night icons'
  }
}

export default function getCurrentIcon(iconName) {
  const lastCharacter = iconName.slice(-1)
  const iconNum = iconName.slice(0, 2)
  const myNum = () => {
    if (iconNum > 2 && iconNum !== '10') {
      switch (iconNum) {
        case '03':
          return 'cloudy'
        case '04':
          return 'cloudy'
        case '09':
          return 'rainShower'
        case '11':
          return 'thunder'
        case '50':
          return 'cloudy'
        default:
          return 'error loading >5 icon'
      }
    } else {
      return lastCharacter === 'd' ? getDayIcon(iconNum) : getNightIcon(iconNum)
    }
  }

  return myNum()
}
