export async function signUpRequest({ name, email, password }) {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (response.ok) {
      return {
        status: true,
      };
    }

    return {
      status: false,
    };
  } catch (err) {
    return {
      status: false,
    };
  }
}

export async function signInRequest({ email, password }) {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      },
    );

    return response.json();
  } catch (err) {
    return {
      message: 'email ou senha incorretos',
    };
  }
}
