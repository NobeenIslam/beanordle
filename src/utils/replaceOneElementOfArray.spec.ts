import { replaceOneElementOfArray } from "./replaceOneElementOfArray"

test("Should replace one elment of the array",()=>{
    expect(replaceOneElementOfArray(["a","b","c"],1,"3")).toStrictEqual(["a","3","c"])
    expect(replaceOneElementOfArray(["","",""],0,"fart")).toStrictEqual(["fart","",""])
    expect(replaceOneElementOfArray(["","",""],4,"fart")).toStrictEqual(["","",""])


})