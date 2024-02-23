import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://courses.ultimateqa.com/users/sign_in');
  //Navigate to Webpage
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Create a new account' }).click();
  //Clicks on new account creation 
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Iam');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Groot');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('Email').fill('testuser@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('New Password').fill('iamgroot2024');
  //fills details
  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByLabel('Toggle menu').click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  //done
});