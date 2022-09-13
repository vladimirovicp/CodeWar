function brightest(colors){


    let maxValue = 0,
        index = 0;


    for(let i = 0; i < colors.length; i++){

        let r = parseInt(colors[i][1] + colors[i][2], 16),
            g = parseInt(colors[i][3] + colors[i][4], 16),
            b = parseInt(colors[i][5] + colors[i][6], 16);
        const val = Math.max(r,g,b);

        if (maxValue < val){
            maxValue = val;
            index = i;
        }
    }

    console.log(colors[index])

}

brightest(["#00FF00", "#FFFF00", "#01130F"]);