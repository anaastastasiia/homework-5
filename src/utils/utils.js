const onChangeListValue = (listFrom, listTo, setListFrom, setListTo) => {
    const firstElement = listFrom[0];
    setListFrom((prevObjects) => prevObjects.slice(1));
    setListTo([firstElement, ...listTo]);
}

const API_URL = "https://65ef5bb3ead08fa78a5055fb.mockapi.io/list";

export {onChangeListValue, API_URL};