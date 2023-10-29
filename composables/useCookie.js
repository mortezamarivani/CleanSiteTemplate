export const useCookie = (event,cookieName , cookieValue)=> {
    const setInCookie = (event,cookieName,cookieValue)=>{
      setCookie(event, cookieName, cookieValue, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/'
      }) 
    }

    return {setInCookie}

  }