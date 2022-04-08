export const getMockPageResults = (name: string, count = 20) => {
  return {
    [name]: {
      info: {},
      results: Array(count).fill({
        skeleton: true,
      }),
    },
  }
}
