/* Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

        Если это число, то вывести в консоль чётное оно или нечётное.
        
        Если передано не число, выведите: «Упс, кажется, вы ошиблись».
        
        *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения. */

const result = +prompt('Введите четное число', '')
if (typeof +result !== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
  alert('Ошибка, введено НЕ ЧИСЛО')
} else if (result % 2 === 0) {
  alert('Число четное')
} else {
  alert('число нечетное')
}