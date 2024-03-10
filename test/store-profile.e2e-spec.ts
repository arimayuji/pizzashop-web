import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()
  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('Another Description')

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(toast).toBeVisible()

  await page.waitForTimeout(250)

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})
