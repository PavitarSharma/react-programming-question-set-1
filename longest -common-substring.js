function longestCommonSubstring(text1, text2) {
    let lcSub = new Array(text1.length+1).fill(null).map(() => new Array(text2.length+1).fill(0));

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i-1] === text2[j-1]) {
                lcSub[i][j] = lcSub[i-1][j-1] + 1;
            } else {
                lcSub[i][j] = Math.max(lcSub[i-1][j], lcSub[i][j-1]);
            }
        }
    }
    
    return lcSub[text1.length][text2.length];
}

const string1 = "Pavitar"
const string2 = "NewSite"


console.log(longestCommonSubstring(string1, string2))