function longestCommonSubstring(string1, string2, m, n) {
    let lcStuff = Array(m+1).fill().map(() => Array(n+1).fill(0))

    let res = 0
    for(let i = 0; i<= m; i++){
        for(let j = 0; j <=n; j++) {
            if(i == 0 || j == 0) {
                lcStuff[i][j] = 0
            }else if(string1[i-1] == string2[j - 1]) {
                lcStuff[i][j] = lcStuff[i-1][j-1] + 1
                res = Math.max(res, lcStuff[i][j])
            }else {
                lcStuff[i][j] = 0
            }
        }
    }

    return res
}

const string1 = "Pavitar"
const string2 = "NewSite"

const m = string1.length
const n = string2.length

console.log(longestCommonSubstring(string1, string2, m, n))