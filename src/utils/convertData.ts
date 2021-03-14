export const convertToCelsius = (degrees: number) => {
    return Math.trunc(degrees - 273.15);
};

export const convertToFahrenheit = (degrees: number) => {
    return Math.trunc(convertToCelsius(degrees) * 1.8 + 32);
};

