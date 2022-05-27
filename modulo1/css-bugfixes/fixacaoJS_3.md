```function calculaNota(ex, p1, p2) {
  const mediaPoderada = ((ex) + (p1*2) + (p2*3)) / (1+2+3)
  if (mediaPoderada>=9){
    return "A"
    } else if (mediaPoderada<9 && mediaPoderada>=7.5){
      return "B"
    } else if (mediaPoderada<7.5 && mediaPoderada>=6){
      return "C"
    } else {
      return "D"
    }
}```