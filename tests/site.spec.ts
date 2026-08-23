import { expect, test } from '@playwright/test';

test.describe('Ninja Paws HQ', () => {
  test('renders the public experience and core links', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Ninja Paws/);
    await expect(page.getByRole('heading', { name: /Make complex feel usable/ })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('link', { name: /Enterprise/ })).toHaveAttribute('href', 'https://github.com/enterprises/ninjapaws');
    await expect(page.getByRole('link', { name: /M365 Profiles/ })).toHaveAttribute('href', 'https://m365profiles.com');
    await expect(page.getByRole('link', { name: /Sentinel Optimizer/ })).toHaveAttribute('href', 'https://sentineloptimizer.com');
  });

  test('filters project cards without a backend', async ({ page }) => {
    await page.goto('/#work');
    const cards = page.locator('.project-card');

    await expect(cards).toHaveCount(6);
    await page.getByRole('button', { name: 'Identity' }).click();
    await expect(cards.filter({ visible: true })).toHaveCount(3);
    await expect(page.getByRole('link', { name: /M365 Profiles/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Cloud Security Dojo/ })).toBeHidden();
  });
});