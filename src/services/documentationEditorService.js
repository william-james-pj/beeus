export async function createDocumentationRequest({
  title,
  content,
  tags,
  token,
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentation`,
      {
        method: 'POST',
        body: JSON.stringify({ title, content, tags }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
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

export async function editDocumentationRequest({
  id,
  title,
  content,
  tags,
  token,
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentation/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ title, content, tags }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
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

export async function deleteDocumentationRequest({ id, token }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentation/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return {
      status: true,
    };
  } catch (err) {
    return {
      message:
        'Desculpe, ocorreu um erro inesperado. Tente novamente mais tarde.',
    };
  }
}
