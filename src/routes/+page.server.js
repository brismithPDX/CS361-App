import { redirect, fail } from '@sveltejs/kit';
import { PASSPHRASE } from '$env/static/private';

export function load({ cookies }) {
	if (cookies.get('allowed')) {
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

			throw redirect(303, '/dashboard');
		}

		return fail(403, {
			incorrect: true
		});
	}
};
