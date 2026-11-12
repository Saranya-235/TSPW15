import {test as base, expect , type Page} from "@playwright/test"

// ? creatre Fixture type
type MyFixture={
    logInFixt:Page
}

// ? Create a fixture
const test = base.extend <MyFixture>({
    logInFixt: async ({page},use)=>{

    // ^ Login steps
     await page.goto('https://www.saucedemo.com/')
     await page.getByPlaceholder("Username").fill("standard_user")
     await page.getByPlaceholder("Password").fill("secret_sauce")
     await page.getByText("Login").click()

    // ^ Invoke use with page
    await use(page)

    }
})

export{test,expect}