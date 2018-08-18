export const cp = function <T>(input: T): T {
  return JSON.parse(JSON.stringify(input)) as T;
} 