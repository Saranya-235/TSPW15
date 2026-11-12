import {test} from "@playwright/test"

// ! page Fixture

test("page fixture", async({page,browserName})=>{
  await page.goto('https://www.saucedemo.com/')
  await page.getByPlaceholder("Username").fill("Hello")
  await page.getByPlaceholder("placeholder").fill("Hii")
  await page.getByText("Login").click()
  await page.waitForTimeout(3000)
})

// ! context Fixture
// test("context fixture ", async({context})=>{
//   let p1= await context.newPage();
//   let p2= await context.newPage()
  
//   await p1.goto("https://www.youtube.com/")
//   await p2.goto("https://www.myntra.com/")
// })