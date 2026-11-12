import {expect, test, type Dialog}from "@playwright/test"
import path from "node:path"

test.use({
    actionTimeout:4000
})

test(" login test", async({page})=>{
    // ? launching saucedemo
    // await page.goto("https://www.saucedemo.com/")
    // await page.locator('[name="user-name"]').fill("standard_user")
    // await page.waitForTimeout(2000)
    // await page.locator('#password').fill('secret_sauce')
    //  await page.waitForTimeout(2000)
    // await page.locator('input[value="Login"]').click()
    // await page.waitForTimeout(3000)

    await page.goto('https://www.flipkart.com/search?q=samsung&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
    let price=await page.locator('//div[text()="Samsung Galaxy A36 5G (Dark Green, 128 GB)"]/../..//div[@class="hZ3P6w DeU9vF"]').textContent()
    console.log(price);
    
})


test("click on specific element", async({page})=>{
    await page.goto('https://www.bigbasket.com/')
    await page.fill('[placeholder="Search for Products..."]', "grapes", {timeout:3000})
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)

    let reqText="Grapefruit, Premium"

    let allEle=await page.locator('//h3[@class="block m-0 line-clamp-2 font-regular text-base leading-sm text-darkOnyx-800 pt-0.5 h-full"]').all()
    console.log(allEle);

    
})


test("popups", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("cakes")
    await page.keyboard.press('Enter')

    let [popupPage]=await Promise.all([
        page.waitForEvent('popup'),
        await page.locator('//span[text()="Winkies Love Bite Cake, Choco & Hazlenut, 50 gm/54 gm"]').click()
    ])
   
    let proName=await popupPage.locator('//span[@id="productTitle"]').innerText()
    console.log(proName);
    

})


// let num=[10,20,30,40,50]
// console.log(num);//[10,20,30,40,50]

// let a=num[0]//10
// let b=num[1]//20


test("uploads", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles("C:/Users/SRIVARSHINI/Desktop/text.txt")
    // await page.getByRole('button',{name:"Upload Single File"}).click()
    await page.locator('#singleFileInput').setInputFiles([
        path.resolve("Screeshot/amazon.jpg"),
        path.resolve('Screeshot/amz.png')

    ])
    await page.waitForTimeout(3000)
    page.getByAltText("").dragTo(page.getByTestId(""))
    /* sdfghjk */
})


test("dialog alertt", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //? Dialog Handler
    // page.once('dialog',async(diag:Dialog)=>{
    //    let type=diag.type()
    //    expect(type).toContain("alert")
    //    let msg=diag.message()
    //    expect(msg).toContain('I am an alert box!')
    //    await page.waitForTimeout(2000)
    //    await diag.accept()
    // })
    // await page.getByText("Simple Alert").click()//? Dialog handled by you
    // await page.getByText("Simple Alert").click()//? Playwright Handled the dialog
    // await page.getByText("Simple Alert").click()//? Playwright Handled the dialog
    // await page.getByText("Simple Alert").click()//? Playwright Handled the dialog
    // await page.waitForTimeout(3000)

     page.on('dialog',async(diag:Dialog)=>{
       let type=diag.type()
       expect(type).toContain("alert")
       let msg=diag.message()
       expect(msg).toContain('I am an alert box!')
       await page.waitForTimeout(2000)
       await diag.accept()
    })
    await page.getByText("Simple Alert").click()//? Dialog handled by you
    await page.getByText("Simple Alert").click()//? Dialog handled by you
    await page.getByText("Simple Alert").click()//? Dialog handled by you
    await page.getByText("Simple Alert").click()//? Dialog handled by you
    await page.waitForTimeout(3000)


})

test("assertions", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle("asdfghjkl,.")

})


test("make my trip", async({page})=>{
    await page.goto("https://www.easemytrip.com/")
    await page.getByText("Departure Date").click()

    let monthYear = "APRIL 2027"
    let date=14



    while(true){

       let text=await page.locator('//div[@class="month-labels"]/span[1]').innerText()
   
       if(text==monthYear){
          await page.locator(`(//span[text()="${date}"])[1]`).click()
          await page.waitForTimeout(3000)
          break;
       }
       else{
           await page.locator('[id="Nxtbtn"]').click()
       }

    }

    // for(;;){
    //       let text=await page.locator('(//div[@class="DayPicker-Caption"])[1]/div').innerText()
   
    //    if(text==monthYear){
    //       await page.locator(`(//p[text()="${date}"])[1]`).click()
    //       await page.waitForTimeout(3000)
    //       break;
    //    }
    //    else{
    //        await page.locator('[aria-label="Next Month"]').click()
    //    }
    // }

    let data="fgh"
    await page.locator("").fill(data)
})