export const  useLocalStorage = (id) => {
    function getIdsFromLocalStorage(){
        if (localStorage.getItem('ids') === null) {
            return [];
        } else {
            return JSON.parse(localStorage.getItem('ids'));
        }
     }

function deleteIdsFromLocalStorage(id){
        let idsInStorage=[];
        idsInStorage = getIdsFromLocalStorage().filter((_id) => _id != id); 
        if(existIdInLocalStorage)
           localStorage.setItem('ids', JSON.stringify(idsInStorage));
    }

function existIdInLocalStorage(id){
        if(getIdsFromLocalStorage().filter((_id) => _id == id) != '')
             return true;
  
          return false;
      }
  

function addIdToLocalStorage(id) {
        let idsInStorage=[];
        idsInStorage = getIdsFromLocalStorage();
        idsInStorage.push(id);
        localStorage.setItem('ids', JSON.stringify(idsInStorage));
    }
    return {getIdsFromLocalStorage,deleteIdsFromLocalStorage,addIdToLocalStorage,existIdInLocalStorage};
}