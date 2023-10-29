export const  useDate = (str) => {
    let today = new Date().toLocaleDateString('fa-IR');

    var
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
    
    const  fixNumbers = (str)=> {
      if(typeof (str) === 'string')
      {
        for(var i=0; i<10; i++)
        {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    }
    
    
    let y = fixNumbers(today.split('/')[0]);
    let m = fixNumbers(today.split('/')[1]) <10 ? '0'+fixNumbers(today.split('/')[1]).toString():fixNumbers(today.split('/')[1]).toString();
    let d = fixNumbers(today.split('/')[2]) <10 ? '0'+fixNumbers(today.split('/')[2]).toString():fixNumbers(today.split('/')[2]).toString();
    
    let currentDate = `${y}${m}${d}`

    function getStrِDate(value){
      if(value == undefined || value == '') return "";
      if(value == 0 )return "00/00/00";
  
      let y= value.toString().substr(0,4);
      let m= value.toString().substr(4,2);
      let d= value.toString().substr(6,2);
      return `${d} / ${m} / ${y}`
  }

  function getQueueStatuse(value){
    if(value == undefined || value == '') return "";
    if (value == 1 ) return " درخواست پذیریش ";
    if (value == 2 ) return "رد درخواست";
    if (value == 3 ) return "منتظر ویزیت";
    if (value == 4 ) return "درحال ویزیت";
    if (value == 5 ) return "اتمام ویزیت";
    if (value == 6 ) return "حذف منشی";
    if (value == 7 ) return "انصراف بیمار";
}

  function getStrTime(value){
    if(value == undefined || value == '') return "";
    if(value == 0 )return "00:00";
    let h= value.toString().substr(0,2);
    let m= value.toString().substr(2,2);
    return `${m} : ${h}`
  }


    return {currentDate,getStrِDate,getQueueStatuse,getStrTime};
}