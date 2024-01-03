export default function sorterDay(data, maxDate){
    const allHours = Array.from({ length: 24 }, (_, index) => index + 1);
    const filteredData = data.filter(_data => {
      const timestampDate = new Date(_data.timestamp);
      const timeDifference = maxDate - timestampDate;
      const hoursDifference = timeDifference / (1000 * 60 * 60);
      return hoursDifference < 24;
    });

    return allHours.map(hour => {
      const matchingData = filteredData.find(_data => {
        const timestampHour = new Date(_data.timestamp).getHours() + 1;
        return timestampHour === hour;
      });
      return matchingData ? matchingData.value : 0;
    });}