import {test,expect} from '@playwright/test';

// this is how you set up a test to run in a isolated environment
// playwright comes with some fixtures that we can use these are methods premade for the purpose of testing
// when creating a test we want to start by deconstructing our page method from our function that comes premade within playwright
test('loginTest', async ({page})=> {
  // our page fixture it allows us to get our page for testing
  await page.goto('http://localhost:5173/');
  
  // once our page is loaded
  await page.getByRole('textbox', {name:'username'}).fill('user');
  await page.getByRole('textbox', {name:'password'}).fill('password');
  await page.getByRole('button', {name:'Login'}).click();
  await expect(page.getByRole('heading',{name:'Todo list'})).toBeVisible();

})