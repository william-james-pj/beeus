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
