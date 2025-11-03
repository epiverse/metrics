// basic metrics as es6 modules

function euclid(a=[1,2,3],b=[4,5,6]){ // default
    // Euclidean distance
    return Math.sqrt(a.map((ai,i)=>(ai-b[i])**2).reduce((x,y)=>x+y))
}

export {euclid}
