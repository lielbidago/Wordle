
export function getWord():string{
    
    return 'lemon';
}

export function isWord(word: string, wordEntered: string):boolean{
    return word===wordEntered;
}

export function checkWord(word: string, wordEntered: string):string[]{
    
    let wordColors = wordEntered.split("");
    const wordStatus = ['grey','grey','grey','grey','grey'];
    
    wordColors.forEach((letter:string, index:number)=>{

            if(word.includes(letter)){
                
                if(word[index]===letter){
                    wordColors[index] = 'green';
                }else{
                    wordColors[index] = 'yellow';
                }
                
            }
 
        })
    
    return wordColors
}
