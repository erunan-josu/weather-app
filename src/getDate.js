export const getDate = (date) => {
  const my_date = new Date(date * 1000)
  const arr = my_date.toString().split(' ')
  return {
    week_day: arr[0],
    day: arr[2],
    month: arr[1],
    year: arr[3],
  }
}
