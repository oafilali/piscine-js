const isValid = (date) => {
    if (date instanceof Date) {
        return !isNaN(date.getTime())
    } else if (typeof date === "number") {
        return !isNaN(new Date(date).getTime())
    } else {
        return false
    }
}

const isAfter = (date1, date2) => {
    if (date1 > date2) {
        return true
    } else {
        false
    }
}

const isBefore = (date1, date2) => {
    if (date1 < date2) {
        return true
    } else {
        false
    }
}

const isFuture = (date) => {
    const currentDate = new Date()
    if (date instanceof Date) {
        if (date > currentDate) {
            return true
        } else {
            false
        }
    }
}

const isPast = (date) => {
    const currentDate = new Date()
    if (date instanceof Date) {
        if (date < currentDate) {
            return true
        } else {
            false
        }
    }
}