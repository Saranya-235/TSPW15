import {test} from "@playwright/test"


// ? only
// test("test1", ()=>{
//     console.log("Test1 Executed");
    
// })

// test.only("test2", ()=>{
//     console.log("Test2 Executed");
    
// })

// test("test3", ()=>{
//     console.log("Test3 Executed");
    
// })

// test.only("test4", ()=>{
//     console.log("Test4 Executed");
    
// })


// ?skip
// test.skip("test1", ()=>{
//     console.log("Test1 Executed");
    
// })

// test.skip("test2", ()=>{
//     console.log("Test2 Executed");
    
// })

// test("test3", ()=>{
//     console.log("Test3 Executed");
    
// })

// test("test4", ()=>{
//     console.log("Test4 Executed");
    
// })

// ? conditional based skipping
test("skipping in ff browser", async({browserName})=>{

    if(browserName=="firefox")
        test.skip()
    else{
        console.log("Running in "+browserName+" ....");
        
    }
})

// ? fail
// test.fail("test1", async({page})=>{
    
//     await page.goto("https://www.trewqui.com/")
// })

// test("test2", ()=>{
//     console.log("Test2 Executed");
    
// })

// test.fail("test3", ()=>{
//     console.log("Test3 Executed");
    
// })

// test("test4", ()=>{
//     console.log("Test4 Executed");
    
// })

// ? fixme()
// test.fixme("test1", ()=>{
//     console.log("Test1 Executed");
    
// })

// test.fixme("test2", ()=>{
//     console.log("Test2 Executed");
    
// })

// test("test3", ()=>{
//     console.log("Test3 Executed");
    
// })

// test("test4", ()=>{
//     console.log("Test4 Executed");
    
// })

// ?test.slow()  - 3*defaultTime  ==> 9sec
// test("test4", async({page})=>{  //9sec
//     test.slow()
//     console.log("Test4 Executed");
//     await page.waitForTimeout(11000)
// })


// ? test.describe()

// test.describe("Login Functioinality", ()=>{
//     test("corr uN Corr PW", ()=>{
//         console.log("Passed");
        
//     })

//      test("corr uN Wr PW", ()=>{
//         console.log("Failed");
        
//     })

//      test("Wr uN Wr PW", ()=>{
//         console.log("Failed");
        
//     })
//      test("Wr uN Corr PW", ()=>{
//         console.log("Failed");
        
//     })
// })



