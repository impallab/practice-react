const url = 'https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=15&page=1';

const images = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response is not ok');
        } else {
            const result = await response.json();
            const images = result.photos.map(photo => photo.src.original);
            return images;
        }
    } catch (error) {
        console.error(error);
        return []; 
    }
}
export default await images();


