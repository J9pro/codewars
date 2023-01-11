function openOrSenior(data) {
    return data.map(([age, handicapRange]) => (age > 54 && handicapRange > 7) ? 'Senior' : 'Open')

}
