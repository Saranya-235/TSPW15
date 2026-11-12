import {test} from "@playwright/test"
import dotenv from "dotenv"

// ! Hardcoded the Environment
// ? Load dotenv file -- dotenv.config()
// dotenv.config({path:"DotEnvData/.env.dev"})

// ? Access the data
// test("login", async({page})=>{
//     let url=process.env.url as string
//     await page.goto(url)
//     await page.getByPlaceholder("Username").fill(process.env.uName as string)
//     await page.getByPlaceholder("Password").fill(process.env.pWord as string)

//     await page.waitForTimeout(2000)

// })

// ! Dynamic Environment
// ? Load dotenv file -- dotenv.config()
dotenv.config({path:`DotEnvData/.env.${process.env.appEnv}`})

// ? Access the data
test("login", async({page})=>{
    let url=process.env.url as string
    await page.goto(url)
    await page.getByPlaceholder("Username").fill(process.env.uName as string)
    await page.getByPlaceholder("Password").fill(process.env.pWord as string)

    await page.waitForTimeout(2000)

    // ? $env:appEnv="dev"; npx playwright test tests/DotEnvUse/envUse.spec.ts --headed   command to run

})
