// basic metrics as es6 modules

function euclid(a=[1,2,3],b=[4,5,6]){ // default
    // Euclidean distance
    return Math.sqrt(a.map((ai,i)=>(ai-b[i])**2).reduce((x,y)=>x+y))
}
// Dev Notes
// ((await import('https://epiverse.github.io/metrics/basic.mjs')).euclid)([1,2,3],[4,5,6])
// ((await import('http://localhost:8000/metrics/basic.mjs')).euclid)([1,2,3],[4,5,6])

function SSSV(x){ // squared root of sum of squared values
    return Math.sqrt(x.map(xi=>xi**2).reduce((a,b)=>(a+b)))
}

function cosine(a=[1,2,3],b=[4,5,6]){
    // Cosine distance
    // AB/(A.B) 
    let AB = a.map((ai,i)=>ai*b[i])
    AB = AB.reduce((v1,v2)=>(v1+v2))
    let A = SSSV(a)
    let B = SSSV(b)
    return 1-AB/(A*B)
}

export {euclid,cosine}