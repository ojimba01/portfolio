export const fetcher = async (url) => {
	try {
	  const response = await fetch(url, {
		headers: {
		  Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`
		}
	  });
  
	  if (!response.ok) {
		throw new Error(`Request failed with status ${response.status}`);
	  }
  
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Fetch error:', error);
	  throw error;
	}
  };
  