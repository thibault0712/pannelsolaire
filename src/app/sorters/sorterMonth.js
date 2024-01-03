export default function sorterMonth(data, maxDate){
    const daysNumber = new Date(maxDate.getFullYear(), maxDate.getMonth() + 1, 0).getDate();
    const filteredData = data.filter(_data => {
      const timestampDate = new Date(_data.timestamp);
      const timeDifference = maxDate - timestampDate;
      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      return daysDifference < daysNumber;
    });
    const averageByDay = Array.from({length: daysNumber}, (_, index) => ({total: 0, count: 0}))
    filteredData.map(_data => {
      const index = new Date(_data.timestamp).getDay();
      if (!averageByDay[index]) {
        averageByDay[index] = { total: 0, count: 0 };
      }
      averageByDay[index].total += _data.value;
      averageByDay[index].count += 1;
    });
    return Object.keys(averageByDay).map(day => averageByDay[day].count > 0 ? averageByDay[day].total / averageByDay[day].count : 0);
}