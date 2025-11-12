// metrics based on unique shared neighbors

function generateVectors(n=5, m=3) {
    // size, dimensions
    // generate random embedded space
    let ii = [...Array(n)].map( (_, i) => i)
    let jj = [...Array(m)].map( (_, j) => j)
    let vec = ii.map(i => {
        return jj.map(j => Math.random())
    })
    return vec
}

function euclidSync(a=[1,2,3],b=[4,5,6]){ // default sync euclid distance
    // Euclidean distance, copied from 
    // (await import('https://epiverse.github.io/metrics/basic.mjs'))['euclid']
    // maybe turn this into a async parm, for now keep it locally async
    return Math.sqrt(a.map((ai,i)=>(ai-b[i])**2).reduce((x,y)=>x+y))
}

function crossTab(vec){ // cross tabulation of distances
    /// using euclidSync to avoid async
    if(!vec){
        vec = generateVectors()
    }
    // extract size and dimensionality
    let n = vec.length
    let m = vec[0].length
    // distance crosstabulation
    let ii = [...Array(n)].map( (_, i) => i)
    let ctab = [];
    ii.forEach(i =>{
        ctab[i]=[]
        ii.forEach(j=>{ctab[i][j]=euclidSync(vec[i],vec[j])})
    })
    return ctab
}

function unique(nns, a, b) {
    // unique share neighbors
    if (!nns) {
        //generate embedded space
        let n = 5
          , m = 3
        // default size, dimentions
        let ii = [...Array(n)].map( (_, i) => i)
        let jj = [...Array(m)].map( (_, j) => j)
        let crossTab = []
        // crosstabulation
        let vec = ii.map(i => {
            return jj.map(j => Math.random())
        })
        debugger
    }
    return ['under development', nns]
}

export {unique,euclidSync}
