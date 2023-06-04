export async function listDocumentationRequest() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentation`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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

export async function getDocumentationRequest(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentation/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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