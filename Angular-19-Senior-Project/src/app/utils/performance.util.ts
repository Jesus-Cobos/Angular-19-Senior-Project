// Time function calc in ms for check performance
  export function measureTime<T>(fn: (...args: any[]) => T, ...args: any[]): T {
    const name = fn.name || 'anonymous function';
    console.time(name);
    const result = fn(...args);
    console.timeEnd(name);
    return result;
  }
  //For async funtions
  export async function measureTimeAsync<T>(fn: (...args: any[]) => Promise<T>, ...args: any[]): Promise<T> {
    const name = fn.name || 'anonymous async function';
    console.time(name);
    const result = await fn(...args);
    console.timeEnd(name);
    return result;
  }
