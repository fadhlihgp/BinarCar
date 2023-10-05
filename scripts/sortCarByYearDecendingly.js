function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (i = 0; i < cars.length; i++) {
    for (j = 0; j < cars.length - i - 1; j++) {
      if (result[j].year < result[j + 1].year) {
        let temp = result[j + 1];
        result[j + 1] = result[j];
        result[j] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
