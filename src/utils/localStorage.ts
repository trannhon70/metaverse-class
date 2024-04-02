// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setLocalStorageData(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// Function to get data from localStorage based on a specific key
export function getLocalStorageData<T>(key: string): T | null {
  const dataString = localStorage.getItem(key);
  if (dataString) {
    return JSON.parse(dataString);
  }
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function moveElement(array: any, index: number): any {
  // Check if the index is valid
  if (index < 0 || index >= array.length) {
    console.log("Invalid index");
    return null;
  }

  // Move the element to the specified position
  if (index === 0) {
    // Move the first element to the end
    const movedElement = array.shift();
    if (movedElement !== undefined) {
      array.push(movedElement);
    }
  } else if (index === array.length - 1) {
    // Move the last element to the beginning
    const movedElement = array.pop();
    if (movedElement !== undefined) {
      array.unshift(movedElement);
    }
  }

  return array;
}
