import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

// Sur le dépôt public juliamrani/portfolio, GitHub Pages sert le site sous /portfolio/.
// Partout ailleurs (dev local, dépôt EPITECH), il reste à la racine.
const base = process.env.GITHUB_REPOSITORY === 'juliamrani/portfolio' ? '/portfolio/' : '/';

export default defineConfig({
	plugins: [react()],
	base,
})
