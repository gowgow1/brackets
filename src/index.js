module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.map(i=>i.join(""))

    for (let i of str){
        for (t of arr){
            str = str.replace(t,"")
        }
    }return str.length==0?true:false
}
