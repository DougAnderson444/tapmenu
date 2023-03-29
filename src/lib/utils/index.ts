export async function uploadImage(): Promise<String> {
	return new Promise((resolve, reject) => {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';
		input.onchange = async (event) => {
			try {
				const url = await convertImage(event);
				resolve(url);
			} catch (error) {
				reject('Error getting image', error);
			}
		};
		input.click();
	});
}

async function convertImage(event): String {
	const file = event.target.files[0];
	const base64 = await convertBase64(file);
	return base64;
}

function convertBase64(file) {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);

		fileReader.onload = () => {
			resolve(fileReader.result);
		};

		fileReader.onerror = (error) => {
			reject(error);
		};
	});
}
