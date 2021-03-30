/**
 * Utility to slit current Array into chunk with following chunkSize
 */
export function createChunks(inputArray: string[], chunkSize: number): Array<string[]> {
  return inputArray.reduce((resultArray, item, index = chunkSize) => {
    const chunkIndex = index % chunkSize;

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as Array<string[]>)
}