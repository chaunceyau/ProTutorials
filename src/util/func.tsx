function chunk(array: string[], size: number) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
}


function formatSecondsToVideoTime(_seconds: number): string {
    const   seconds = Math.floor(_seconds  % 60),
            minutes = Math.floor((_seconds / (60) % 60)),
            hours   = Math.floor((_seconds / (60*60) % 24))
    
    const modifiedSeconds = seconds === 0 ? '00' : seconds
    const modifiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    // return `${hours > 0 && `${hours}:`} ${minutes > 0 && `${minutes}:`} ${seconds}`
    if (hours > 0)
        return `${hours}:${modifiedMinutes}:${modifiedSeconds}`
    return `${modifiedMinutes}:${modifiedSeconds}`
  }

export { chunk, formatSecondsToVideoTime };


