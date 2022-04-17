interface Threshold {
  domain: number[];
  range: string[];
}

export function createThreshold(options: Threshold) {
  const { domain, range } = options;
  const n = Math.min(domain.length, range.length - 1);
  return (x: number) => {
    const index = domain.findIndex((v) => x < v);
    return range[index === -1 ? n : index];
  };
}
