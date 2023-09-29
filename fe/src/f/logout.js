import Cookie from "js-cookie"
export const logout= ()=> {
    Cookie.remove("id")
    window.location.reload()
}