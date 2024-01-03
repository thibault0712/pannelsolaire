export default function sorterWeek(data, maxDate){
    const filteredData = data.filter(_data => {
        const timestampDate = new Date(_data.timestamp);
        const timeDifference = maxDate - timestampDate;
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        return daysDifference < 7;
      });
      const averageByDay = {"lun." : {total: 0, count: 0}, "mar." : {total: 0, count: 0}, "mer." : {total: 0, count: 0}, "jeu." : {total: 0, count: 0}, "ven." : {total: 0, count: 0}, "sam." : {total: 0, count: 0}, "dim." : {total: 0, count: 0}};
      filteredData.map(_data => {
        const timestampDay = new Date(_data.timestamp).toLocaleDateString('fr-FR', { weekday: 'short' });
        if (!averageByDay[timestampDay]) {
          averageByDay[timestampDay] = { total: 0, count: 0 };
        }
        averageByDay[timestampDay].total += _data.value;
        averageByDay[timestampDay].count += 1;
      });
      return Object.keys(averageByDay).map(day => averageByDay[day].count > 0 ? averageByDay[day].total / averageByDay[day].count : 0);
    }