import {test} from "@playwright/test"

test("t1", ()=>{
    // console.log("Test 1 executed");
    
})

test.fail("t2", ()=>{
    // console.log("Test 2 executed");
    
})

test.skip("t3", ()=>{
    // console.log("Test 3 executed");
    
})