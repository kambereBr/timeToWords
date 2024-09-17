// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const [hours, minutes] = time.split(':').map(Number);

  const words = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
  ];

  function getMinute(min) {
    if (min <= 20) return words[min];
    
    const twenty = 'twenty';
    return `${twenty} ${(min - 20)}`;
  }


  // handle midnight and midday
  if (hours === 0 && minutes === 0) return 'midnight';
  if (hours === 12 && minutes === 0) return 'midday';
  

  const hourWord = words[hours];
  const nexthourWord = words[hours + 1];
  if (minutes === 0) return `${hourWord} o'clock`;
  if (minutes < 30) return `${words[minutes]} past ${hourWord}`;
  if (minutes == 30) return `half past ${hourWord}`;
  if (minutes === 45) return `quarter to ${nexthourWord}`;
  if (minutes > 30) return `${(60 - minutes)} to ${nexthourWord}`;
  
}

module.exports = { convertTimeToWords };