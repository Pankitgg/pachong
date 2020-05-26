


//
// function gettagchangedata(a,x){
//     fm=a.map(res=>{if(x.indexOf(res)>-1){return res}})
//     return fm
// }
// console.log(gettagchangedata([1,2,3],[1,7,18]))

function ff(x) {
    return nextSelectedTags.indexOf(x)>-1
}
const entity=[12,13,14];
const nextSelectedTags=[13,15,17,18];
let entity2=entity.filter(item =>ff(item));
console.log('You are force interested in: ', entity2);