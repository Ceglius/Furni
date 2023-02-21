//  Num counter
function numCounter(selector, number, time, step) {
    const counter = document.querySelector(selector)

    let res = 0

    const allTime = Math.round(time / (number / step))

    let interval = setInterval(() => {
        res = res + step

        if (res === number) {
            clearInterval(interval)
        }
        counter.innerHTML = res
    }, allTime)
}
numCounter('#num1', 600, 2000, 10)
