export const IDR = (value) => {
    let number = 0;
    if(Number.isInteger(value)){
        number = parseInt(value)
    }
    return `IDR ${new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 6 }).format(number)}`
}