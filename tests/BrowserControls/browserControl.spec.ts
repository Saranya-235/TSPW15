import {test, chromium} from "@playwright/test"

// test("browser Controls", async({browser})=>{
//    let context=await browser.newContext()
   
//    let page= await context.newPage()

//    await page.goto('https://www.amazon.in/')
//    let cookies=await context.cookies()
//    console.log(cookies);

//    await context.clearCookies()

//    console.log(await context.cookies());

//    await context.addCookies([{
//     name: 'sar-anya',
//     value: 'tb:s-DXEYGSB7PC3E0DJ1F4DN3|1791892488634&t:1791892489256&adb:adblk_no',
//     domain: 'www.amazon.in',
//     path: '/',
//     expires: 1822132489,
//     httpOnly: false,
//     secure: false,
//     sameSite: 'Lax'
//   }])

//   console.log(await context.cookies());

//    await browser.close()
//      await context.close()
//   await page.close()

 

  
   
// })


// test("page methods", async({page})=>{
    // console.log(page.viewportSize());
    // await page.setViewportSize({width:800,height:400})
    // await page.goto("https://www.amazon.in/") 
    // await page.waitForTimeout(3000) // hard coded 
    // await page.goBack()
    // await page.waitForTimeout(3000)
    // await page.goForward()
    // await page.waitForTimeout(3000)
    // await page.reload()
    // await page.waitForTimeout(3000)
// })//30sec



test("screenshots", async({page,context})=>{
     await page.goto("https://www.amazon.in/") 
     
      console.log(page.url());
      await page.waitForTimeout(3000)
      console.log(await page.title());
      

    //  ? Buffered screenshot
    //  await page.screenshot()

    //  ? save
    // await page.screenshot({path:"amazon.png"})

    // ?save the scrren shot in folder
    // await page.screenshot({path:"Screeshot/amazon.png"})
    // await page.screenshot({path:"Screeshot/amazon.jpg"}) 

    // ?full page screenshot
    // await page.screenshot({path:"Screeshot/amz.png",fullPage:true})

    // await page.close()
    // await context.close()
})


test.only("launch", async()=>{
    let browser=await chromium.launch({headless:false})
    let cont= await browser.newContext()
    let page=await cont.newPage()
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
})


