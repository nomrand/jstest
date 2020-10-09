describe("Test for sampleSum", function(){
    it("1+1=2", function(){
        expect(sampleSum(1, 1)).toBe(2);
    });
    it("-1+1=0", function(){
        expect(sampleSum(-1, 1)).toBe(0);
    });
    it("'a' + 'b'= 'ab'", function(){
        expect(sampleSum('a', 'b')).toBe('ab');
    });
    // it("0+1=1", function(){
    //     expect(sampleSum(0, 1)).toBe(0); // missed!
    // });
});

describe("Test1", function(){
    it("1+1=2", function(){
        expect(sampleSum(1, 1)).toBe(2);
    });
});
