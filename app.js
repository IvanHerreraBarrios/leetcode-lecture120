var canSeePersonCount = function(heights) {
    const result = [];
    for(let i=0; i < heights.length; i++){
        let count = 0; 
        let max = -1;
        for(let j=i+1; j < heights.length; j++){
            
            if(heights[j] > max){
                count++;
                max=heights[j];
            }
            if(heights[j] > heights[i]){
                break
            }
        }
        result[i] = count;
    }
    return result;
}