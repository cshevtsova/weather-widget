export const convertToCelsius = (degrees: number) => {
    return Math.trunc(degrees - 273.15);
};

export const convertToFahrenheit = (degrees: number) => {
    return Math.trunc(convertToCelsius(degrees) * 1.8 + 32);
};

export const getDate = (timestamp:number) => {
    const date = new Date(timestamp * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return month + '/' + day + '/' + year;
}