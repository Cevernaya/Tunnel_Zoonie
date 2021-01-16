const firstChoice = document.querySelector(".choiceFirst")
const secondChoice = document.querySelector(".choiceSecond")

let deathCounts = 0

class page {
	constructor(serialNum){
		this.location = serialNum
		this.image = data[serialNum].location
		this.preText = data[serialNum].preText
		this.text = data[serialNum].text
		this.choice1 = data[serialNum].choice1
		this.choice2 = data[serialNum].choice2
		this.way1 = links[serialNum][1]
		this.way2 = links[serialNum][2]
	}
	
	setWay(num) {
		return new page(num)
	}
}

let you = new page(44)

function printBoard() {
	const main = document.querySelector("main")
	const choiceFirst = document.querySelector(".choiceFirst")
	const choiceSecond = document.querySelector(".choiceSecond")
	const deathCount = document.querySelector(".deathCount")
	const text = document.querySelector(".text")
	const preTextBox = document.querySelector(".preText")
	
	main.innerHTML = `<img src="./Images/${you.image}.png"/>`
	preTextBox.innerText = you.preText
	choiceFirst.innerText = you.choice1
	choiceSecond.innerText = you.choice2
	text.innerText = you.text
	
	if(you.location > 24 && you.location < 44) {
		deathCounts += 1
	}

	deathCount.innerText = `Death Count : ${deathCounts}`
	//나중에 DB파일 만든 후 현재 location에 맞는 내용들 긁어오게 하기
}

function onClick1 () {
  you = you.setWay(you.way1)
	printBoard()
}

function onClick2 () {
    you = you.setWay(you.way2)
	printBoard()
}

function init() {
	printBoard()
	firstChoice.addEventListener("click",onClick1)
	secondChoice.addEventListener("click",onClick2)
}

init()

