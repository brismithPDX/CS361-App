import { redirect, fail } from '@sveltejs/kit';
import { PASSPHRASE } from '$env/static/private';

export function load({ cookies }) {
	if (cookies.get('allowed')) {
		console.log("Checking if user session already exists")
		throw redirect(307, '/dashboard');
	}
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		if (data.get('password') === PASSPHRASE) {
			cookies.set('allowed', 'true', {
				path: '/'
			});
			console.log("User has Successfuly Logged in, redirecting to Dashboard Page.")
			throw redirect(303, '/dashboard');
		}

		console.log("Failed Login Attempt")
		return fail(403, {
			incorrect: true
		});
	}
}
