export default function sorterYear(data){
    const averageByMonth = Array.from({ length: 12 }, () => ({
        total: 0,
        count: 0
      }));

      data.forEach(_data => {
        const timestampMonth = new Date(_data.timestamp).getMonth();
        averageByMonth[timestampMonth].total += _data.value;
        averageByMonth[timestampMonth].count += 1;
      });

      return averageByMonth.map(month => (month.count > 0 ? month.total / month.count : 0));
}