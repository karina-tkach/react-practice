export async function fetchData() {
    try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        if (!response.ok) {
            throw new Error('Response was not ok!');
        }
        const data = await response.json();
        if (!data.error) {
            return data.data;
          }
          else {
            return null;
          }
    } catch (error) {
        console.error('Problem fetching the data:', error);
        return null;
    }
}