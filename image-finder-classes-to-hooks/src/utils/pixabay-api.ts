const myKey: string = import.meta.env.VITE_API_KEY;

function linkSlug(query: string, page: number, limits = 12) {
  return `https://pixabay.com/api/?q=${query}&page=${page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=${limits}`;
}

export function fetchData(query: string, page: number, limits: number) {
  try {
    return fetch(linkSlug(query, page, limits)).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
  } catch (error) {
    throw error;
  }
}
