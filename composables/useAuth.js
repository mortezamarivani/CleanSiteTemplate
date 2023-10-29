export const  useAuth = () => {

    const authUser = useState('auth_User' , ()=> null);
    
    const userInfo = useState('user_Info' , ()=> null);

    const countRequest = useState('countRequest' , ()=> null);

    const phone  = useState('phone', ()=>null)

    const startCountDown  = useState('startCountDown', ()=>true)

    const showFooter  = useState('showFooter', ()=>true)

    const showSearchPanel  = useState('showSearchPanel', ()=>false)

    // const isMainPage  = useState('isMainPage', ()=>false)

    return {authUser,phone,startCountDown,countRequest,userInfo,showFooter,showSearchPanel};
    
}