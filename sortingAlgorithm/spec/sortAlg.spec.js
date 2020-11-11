describe("sort", () => {
    it("should sort the given array [8, 1, 2, 9, 5, 4, 7] to [1, 2, 4, 5, 7, 8, 9]", () => {
        let array = [8, 1, 2, 9, 5, 4, 7];
        let result = [1, 2, 4, 5, 7, 8, 9];
    expect(sort(array)).toEqual(result);
  });
    it("should sort the given array [12, 88, 532, 9, 1] to [1, 9, 12, 88, 532]", () => {
        let array = [12, 88, 532, 9, 1]
        let result = [1, 9, 12, 88, 532]
    expect(sort(array)).toEqual(result);
    })
    it("should sort the given array [3, 1, 2] to [1, 2, 3]", () => {
        let array = [3, 1, 2]
        let result = [1, 2, 3]
    expect(sort(array)).toEqual(result);
    })
    it("should sort the given array [412, 29, 444, 9000] to [29, 412, 444, 9000]", () => {
        let array = [412, 29, 444, 9000]
        let result = [29, 412, 444, 9000]
    expect(sort(array)).toEqual(result);
    })
    it("should sort the given array [216, 343, 107, 8, 17, 59, 32, 498, 212, 86, 20, 1] to [1, 8, 17, 20, 32, 59, 86, 107, 212, 216, 343, 498]", () => {
        let array = [216, 343, 107, 8, 17, 59, 32, 498, 212, 86, 20, 1]
        let result = [1, 8, 17, 20, 32, 59, 86, 107, 212, 216, 343, 498]
    expect(sort(array)).toEqual(result);
    })
});
