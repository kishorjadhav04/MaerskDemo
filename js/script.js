//  taken an array of 9 element
let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cubeWrapper = document.getElementById('container-cube'), appendCubeElement;

numbersArray.forEach((item, index) => {
  cubeWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})
shuffleArray = () => {
  let index = 0
  numbersArray = numbersArray.sort(() => { return .3 - Math.random() }); // shuffleArray an element of 3
  cubeWrapper.innerHTML = ''
  while (index < numbersArray.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index]
    cubeItem.setAttribute('data-item', numbersArray[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}
sortArray = () => {
  let index = 0
  numbersArray = numbersArray.sort((a, b) => { return a - b });
  cubeWrapper.innerHTML = ''
  while (index < numbersArray.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index]
    cubeItem.setAttribute('data-item', numbersArray[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}

