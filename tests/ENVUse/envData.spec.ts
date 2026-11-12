// ? Passing hardcoded environment
// import {test} from "@playwright/test"
// import dotenv from "dotenv"

// dotenv.config({path:`testData/.env`})
// test("env data reading", async({page})=>{
//     let url = process.env.url as string
//     let uName = process.env.uName as string
//     let pWord = process.env.pWord as string
//     await page.goto(url)
//     await page.getByPlaceholder("Username").fill(uName)
//     await page.getByPlaceholder("Password").fill(pWord)
//     await page.waitForTimeout(2000)
// })


// ? Passing dynamic environMent while running
import {test} from "@playwright/test"
import dotenv from "dotenv"

dotenv.config({path:`testData/.env.${process.env.appEnv}`})
test("env data reading", async({page})=>{
    let url = process.env.url as string
    let uName = process.env.uName as string
    let pWord = process.env.pWord as string
    await page.goto(url)
    await page.getByPlaceholder("Username").fill(uName)
    await page.getByPlaceholder("Password").fill(pWord)
    await page.waitForTimeout(2000)
})