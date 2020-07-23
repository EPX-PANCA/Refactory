function leapYear (start, end) {
  if (start <= end) {
    if (((start % 4 == 0) && (start % 100 != 0)) || (start % 400 == 0)) {
      console.log(`${start}: Tahun kabisat`)
    } else {
      console.log(`${start}: Bukan tahun kabisat`)
    }
    leapYear (start += 1, end)
  }
  
  
}

leapYear(2000, 2020)