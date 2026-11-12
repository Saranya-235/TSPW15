import {test,expect} from "../../CustomFixture/loginFixture.js"

test("login Test", async({logInFixt})=>{

    await expect(logInFixt.getByText('Products')).toBeVisible()
    await logInFixt.waitForTimeout(2000)

})