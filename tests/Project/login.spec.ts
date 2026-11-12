import {test} from "@playwright/test"
// ! Modular Framework
// import {test} from "@playwright/test"
// import jsonData from "../../testdata/common_Data.json" with {type:"json"}

// test("loginTest",async({page})=>{
//     await page.goto(jsonData.url)
//     await page.locator('[name="user_name"]').fill(jsonData.userName)
//     await page.locator('[name="user_password"]').fill(jsonData.password)
//     await page.getByRole('button',{name:"Login"}).click()
// })

// ! Data Driven Framework
// import {expect, test} from "@playwright/test"
// import ExcelJs
// import jsonData from "../../testData/commondata.json" with {type:"json"}

// test("loginTest",async({page})=>{
//     await page.goto(jsonData.url)
//     await page.locator('[name="user_name"]').fill(jsonData.userName)
//     await page.locator('[name="user_password"]').fill(jsonData.passWord)
//     await page.getByRole('button',{name:"Login"}).click()

//     // let str=await page.locator('//a[contains(text(),"Home")]').textContent()
// let allEle= await page.locator('//a').all()
// await allEle[57]?.fill("")
//     expect(page.locator('//a[contains(text(),"Home")]')).toHaveText("ashdkj")
// })


// test("nestediFrames", async({page})=>{
//     await page.goto("https://www.dezlearn.com/nested-iframes-example/")
//     await page.waitForTimeout(4000)
//    let parFrame=page.frame({name:"demo_parent_iframe"})
//    let childFrames=parFrame?.childFrames()
//    if(typeof childFrames != "undefined"){
//     await childFrames[0]?.locator("#u_5_6").click()
//    }
//     await page.waitForTimeout(3000)

// }) 


// for(let i=0;i<=5;i++){
//     test("nestediFrames", async({page})=>{
//     await page.goto("https://www.dezlearn.com/nested-iframes-example/")
//     await page.waitForTimeout(4000)
//    let parFrame=page.frame({name:"demo_parent_iframe"})
//    let childFrames=parFrame?.childFrames()
//    if(typeof childFrames != "undefined"){
//     await childFrames[0]?.locator("#u_5_6").click()
//    }
//     await page.waitForTimeout(3000)

// }) 

// }

