/**
 * Utility to slit current Array into chunk with following chunkSize
 */
export function createChunks(inputArray: string[], chunkSize: number): Array<string[]> {
  return inputArray.reduce(
    (
      resultArray: Array<string[]>,
      item,
      index = chunkSize
    ) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []
  );
}