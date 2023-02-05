/* return multiplication table for number that is always an integer from 1 to 10.
For example, a multiplication table (string) for number == 5 looks like below:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15 etc...
P. S. You can use \n in string to jump to the next line.
Note: newlines should be added between rows, but there should be no trailing newline at the end.*/
function multiTable(number) {
    const rows = [];
    for (let i = 1; i <= 10; i++){
        rows.push(`${i} * ${number} = ${i * number}`)
    }
    return rows.join('\n')
}