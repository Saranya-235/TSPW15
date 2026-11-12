import { firefox, test,type Browser, type BrowserContext} from "@playwright/test"

/* //~
 ~ test("title", async ()=>{
 ~    script
~})
    */

//  ! -> how to launch amazon app from scratch
test("launching amazon", async ()=>{
    // ? Browser cteation
     let ff:Browser= await firefox.launch()

    //  ? Context Creation
    let context:BrowserContext=await ff.newContext()

    // ? Page creation
    let page=await context.newPage()

    // ? launch the app
    await page.goto('https://www.amazon.in/')

    // ? hardcoded wait
    await page.waitForTimeout(3000)
})




