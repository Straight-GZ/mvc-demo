import './app1.css'
import $ from 'jquery'

const $add = $('.add1')
const $minus = $('.minus1')
const $mul = $('.mul2')
const $divide = $('.divide2')
const $number = $(".number")
const n=localStorage.getItem('n')
$number.text(n||100)

$add.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n',n)
    $number.text(n)
})
$minus.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n',n)
    $number.text(n)
})
$mul.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n',n)
    $number.text(n)
})
$divide.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n',n)
    $number.text(n)
})