export async function getRankingRequest({ token }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/ranking`,
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
