export const  useCommons = (cardId,queueStatus,currentDate,authUser,phone,userInfo) => {
    const {existIdInLocalStorage} =useLocalStorage();  
    const queueId=ref(0);
    const showRegister=ref(false)
    const today=ref(currentDate);
    const year = ref();
    const month = ref();
    const day = ref();
    year.value=today.value.toString().substr(0,4);
    month.value=today.value.toString().substr(4,2);
    day.value=today.value.toString().substr(6,2);
    const busyTimes=ref([]);
    const userSelectTime=ref("");
    const userSelectQueue=ref(0);

    const freeTimes=ref([]);
    const showFreeTimesPanel=ref(false)
    const showFooter=ref(false)
    const {showSearchPanel} = useAuth() 

    

  //move to useFreeTimes
  async function getBusytimesFromApi(drId,date,fromTime,toTime){
      busyTimes.value=[];
      // console.log("getBusytimes From Api",drId,date,fromTime,toTime)
      const { data  } = await $fetch(`/api/qu/busytimes`, {
              method: 'POST',
              headers: useRequestHeaders(['cookie']),
              body:  {
                      'VisitDate':date,
                      'DrId':drId,
                      'FromTime':fixTime(fromTime),
                      'ToTime':fixTime(toTime)
              }
          })
      
      busyTimes.value = data;
      console.log('busy time after api ' , busyTimes.value)
      
  }

  function generateFreeTimes(){
    // console.log('busyTimes.value',busyTimes.value)
    let startHour = parseInt(fixTime(userInfo.value.workFromTime).substr(0,2));
    let endHour = parseInt(fixTime(userInfo.value.workToTime).substr(0,2));
    let startMinut = parseInt(fixTime(userInfo.value.workFromTime).substr(2,2));
    let endMinut = parseInt(fixTime(userInfo.value.workToTime).substr(2,2));

    let row = 1;
    for (let h = startHour ; h <= endHour; h++) {
        for (let m = (h == startHour? startMinut : 0) ; m <= (h == endHour? endMinut :60); m) {
            if( m == 1 ) m = 0;
            if(m != 60){
                if(busyTimes.value.find(el => fixTime(el.visitTime) == fixHour(h)+fixHour(m)) == undefined){
                   freeTimes.value.push({
                     "row": row,
                     "time" : fixHour(h)+fixHour(m),
                     "isFree" : true
                   })
                }
                else{
                  freeTimes.value.push({
                    "row": row,
                    "time" : fixHour(h)+fixHour(m),
                    "isFree" : false
                  })
                }
            }//end of if(m != 60)
            row+=1;
            m +=userInfo.value.period 
        }//end of for
    }
    console.log('busy time after generateFreeTimes ' , busyTimes.value)
  }

  function filterFreeTimesByHour(hour){
      freeTimes.value =  freeTimes.value.filter(el=> {
          return el.time.substr(0,2) == hour
      });
      console.log('busy time after filterFreeTimesByHour ' , busyTimes.value)
  }
  
  function selectFreeTimeByUser(time , isFree,row,queueId){
    freeTimes.value = [];
    generateFreeTimes();
    filterFreeTimesByHour(time.substr(0,2))

    freeTimes.value.map(el=> {
        if(el.isFree != false){
          document.getElementById(el.time).style.backgroundColor = "rgb(138, 236, 146)"
        }
    })
    document.getElementById(time).style.backgroundColor = "#efbdce"

    userSelectTime.value = isFree ? time : ""
    userSelectQueue.value = isFree ? row : 0
  }




  // move to useShowBtns
  
  function showCancelButton(queueId,authUser,queueStatus){
    //if(authUser) return true;
    if(authUser == null && queueStatus>=4 ) return false;
    if(authUser == null && existIdInLocalStorage(queueId)) return true;
       
    return false;
  }

  function showEditBtn(queueId,queueStatus){
        if(authUser.value != null) return true;
        if(authUser.value == null  && queueStatus > 2) return false;
        if(authUser.value == null  && existIdInLocalStorage(queueId)) return true;

        return false;
  }

  function changeShowRegister(drId,visitdate,fromTime,toTime){
    userSelectTime.value=""
    showRegister.value = !showRegister.value;
    queueId.value = 0 ;
    console.log('visitdate in changeShowRegister',visitdate)
    //getBusytimesFromApi(drId,visitdate,fromTime,toTime)
    freeTimes.value = []
    //filterFreeTimesByHour(fixTime(userInfo.value.workFromTime).substr(0,2))
    showSearchPanel.value = false;
  }





  // move to useDate
  function getPhoneStr(phone){
    //get 9191640655 
    //return 919-164-0655
    let prefix=0;
    let part1=0;
    let part2=0;

    prefix=phone.toString().substr(0,3);
    part1=phone.toString().substr(3,3);
    part2=phone.toString().substr(6,4);

    return `${part2} - ${part1} - ${prefix}`;
  }

  function fixHour(value){
    if(value < 10) return "0"+value.toString();
    return value.toString();
  }

  function fixTime(value){
    if(value.toString().length == 3) return "0"+value.toString();
    if(value.toString().length == 2) return "00"+value.toString();
    if(value.toString().length == 1) return "000"+value.toString();
    return value.toString();
  }


  


  return {changeShowRegister,
        year,month,day,today,showRegister,queueId,showCancelButton,showEditBtn,getPhoneStr,fixTime,fixHour,
        busyTimes,freeTimes,generateFreeTimes,selectFreeTimeByUser,filterFreeTimesByHour,userSelectTime,
        showFreeTimesPanel,showFooter,userSelectQueue,getBusytimesFromApi,busyTimes};
}