const apiRequest = async(api = '', optionObj = null, errmsg = null)=>{
    try{

        const response = await fetch(api, optionObj)
        if(!response.ok){
            throw new Error('please reload the app')
        }

    }catch(err){
        errmsg = err.message
    }finally{
        return errmsg
    }
}
export default apiRequest