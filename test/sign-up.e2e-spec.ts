import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu celular ').fill('1131231452313')
  await page.getByLabel('Seu novo estabelecimento ').fill('Pizza Shop')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  await expect(toast).toBeVisible()
})
test('sign in with wrong credentials', async ({ page }) => {
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu celular ').fill('1131231452313')
  await page.getByLabel('Seu novo estabelecimento ').fill('Invalid Name')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Erro ao cadastrar o restaurante')

  expect(toast).toBeVisible()
})
test('navigate to new  login page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
