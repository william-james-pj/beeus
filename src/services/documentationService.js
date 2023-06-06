export async function listDocumentationRequest({ token }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentation`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.ok) {
      return { data: await response.json() };
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

export async function getDocumentationByIdRequest({ id, token }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentation/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.ok) {
      return { data: await response.json() };
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
