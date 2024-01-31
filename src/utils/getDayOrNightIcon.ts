function getDayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours()

  const isDayTime = hours > 6 && hours < 18

  return isDayTime ? iconName.replace(/.S/, "d") : iconName.replace(/.S/, "n")
}

export default getDayOrNightIcon;