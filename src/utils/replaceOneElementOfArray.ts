export function replaceOneElementOfArray(
  prevArray: string[],
  indexToReplace: number,
  substitute: string
): string[] {
  for (const index in prevArray) {
    if (parseInt(index) === indexToReplace) {
      prevArray[index] = substitute;
    }
  }
  const newArray = [...prevArray];

  return newArray;
}

/* 
 function replaceOneElement()
     inputs prevArray, indexToReplace
     return newArray
 
 for each INDEX of PREV_ARRAY
     if INDEX = INDEX_TO_REPLACE
         set NEW_ELEMENT = event.target.tvalue
         set PREV_ARRAY[CURRENTINDEX]=  NEW_ELEMENT
     ENDIF
 set NEW_ARRAY = [...PREV_ARRAY]
 
 return NEW_ARRAY
 
 */
