// Télécharge le CV (public/cv.pdf) avec un nom de fichier clair
export function downloadCv() {
	const link = document.createElement('a');
	link.href = `${import.meta.env.BASE_URL}cv.pdf`;
	link.download = 'CV Julia El Amrani.pdf';
	link.click();
}
