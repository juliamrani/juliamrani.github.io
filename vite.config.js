import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

// Sur un dépôt personnel juliamrani/<nom>, GitHub Pages sert le site sous /<nom>/,
// sauf pour le dépôt juliamrani.github.io, servi à la racine.
// Partout ailleurs (dev local, dépôt EPITECH), le site reste à la racine.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isProjectSite = owner === 'juliamrani' && repo && repo.toLowerCase() !== 'juliamrani.github.io';
const base = isProjectSite ? `/${repo}/` : '/';

export default defineConfig({
	plugins: [react()],
	base,
})
