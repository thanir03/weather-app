export const getRequest = async function (URL, option) {
  try {
    const response = await fetch(URL, option);
    if (!response.ok) throw new Error("Cannot fetch data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCoordinates = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
