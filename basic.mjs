// basic metrics as es6 modules

function euclid(a=[1,2,3],b=[4,5,6]){ // default
    // Euclidean distance
    return Math.sqrt(a.map((ai,i)=>(ai-b[i])**2).reduce((x,y)=>x+y))
}
// Dev Notes
// ((await import('https://epiverse.github.io/metrics/basic.mjs')).euclid)([1,2,3],[4,5,6])
// ((await import('http://localhost:8000/metrics/basic.mjs')).euclid)([1,2,3],[4,5,6])

function SSV(x){ // squared root of sum of squared values
    return Math.sqrt(x.map(xi=>xi**2).reduce((a,b)=>(a+b)))
}

function cosine(a=[1,2,3],b=[4,5,6]){
    // Cosine distance
    // AB/(A.B) 
    let AB = a.map((ai,i)=>ai*b[i])
    AB = AB.reduce((v1,v2)=>(v1+v2))
    let A = SSV(a)
    let B = SSV(b)
    return 1-AB/(A*B) // distance = 1-similarity
}

function corr(x=[1,2,3],y=[4,5,6]){
    // Pearson correlation coeficient r2
    let n = x.length
    let avg_x = x.reduce((a,b)=>a+b)/n
    let avg_y = y.reduce((a,b)=>a+b)/n
    let dx = x.map(xi=>(xi-avg_x))
    let dy = y.map(yi=>(yi-avg_y))
    let dd = dx.map((dxi,i)=>dxi*dy[i])
    dd = dd.reduce((a,b)=>a+b)
    return dd/(SSV(dx)*SSV(dy))
}

export {euclid,cosine,corr}