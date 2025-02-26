function defaultCurry(obj) {
    let arr = Object.entries(obj)
    return function(obj2) {
        let arr2 = Object.entries(obj2)
        arr2.forEach(([key, value]) => { // Changed filter to forEach
            let index = arr.findIndex(([k]) => k === key) // Find index of key arr
            if (index !== -1) {
                arr[index][1] = value // Update value if key exists
            } else {
                arr.push([key, value]) // Add new key-value pair if key does not exist
            }
        })
        return Object.fromEntries(arr)
    }
}

function mapCurry(func) {
    return function(obj) {
        let arr = Object.entries(obj)
        let result = []
        arr.forEach(([key, value]) => {
            result.push(func([key, value]))
        })
        return Object.fromEntries(result)
    }
}

function reduceCurry(func) {
    return function(obj, initialValue) {
        return Object.entries(obj).reduce((accumulator, [key, value]) => 
            func(accumulator, [key, value]), 
            initialValue
        )
    }
}

function filterCurry(func) {
    return function(obj, initialValue) {
        return Object.fromEntries(Object.entries(obj).filter(([key, value]) => 
            func([key, value])))
    }
}

function reduceScore(personnel, initialValue = 0) {
    return reduceCurry((acc, [_, v]) => {
        if (v.isForceUser) {
            return acc + v.shootingScore + v.pilotingScore
        }
        return acc
    })(personnel, initialValue)
}

function filterForce(personnel) {
    return filterCurry(([_, v]) => {
        if (v.isForceUser && v.shootingScore >= 80) {
            return true
        }
        return false
    })(personnel)
}

function mapAverage(personnel) {
    return mapCurry(([k, v]) => {
        if (v) {
            return [k, { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 }]
        }
    })(personnel)
}


/* prettier-ignore
const personnel = {
    lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
    sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
    calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}

mapCurry(([k, v]) => [`${k}_force`, v])(personnel)
/* output
{
  lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}

/*defaultCurry({
    http: 403,
    connection: 'close',
    contentType: 'multipart/form-data',
})({
    http: 200,
    connection: 'open',
    requestMethod: 'GET'
})*/
// output
//  {
//      http: 200,
//      connection: 'open',
//      contentType: 'multipart/form-data',
//      requestMethod: 'GET'
//  }