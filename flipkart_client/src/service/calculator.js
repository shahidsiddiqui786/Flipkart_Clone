export const calcDiscountPrice  = (cost ,discountPercentage) => {
    discountPercentage = 100 - discountPercentage
    let newPrice = (discountPercentage * cost ) / 100
    return Math.floor(newPrice)
}

export const calcDiscount = (cost, discountPercentage) => {
    return cost - calcDiscountPrice(cost, discountPercentage)
}

export const calcRating = (rating) => {
    return rating.toFixed(1)
}

export const addEllipsis = (text) => {
    if(text.length > 50) {
        return text.substring(0, 50) + '...'
    }
}