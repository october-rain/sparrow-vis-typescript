export function createIdentity() {
  return <T>(x: T): T => x;
}
