const fetchCats = async (page) => {
    const limit = 8;
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=Desc`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": "091bbe8c-9223-46cb-b7c5-92331c2cfe2b",
        },
    });

    const paginationCount = response.headers.get("Pagination-count");
    const limitPages = Math.floor(paginationCount / limit)

    const cats = await response.json();

    return {
        cats,
        limitPages,
    }
}

export { fetchCats };