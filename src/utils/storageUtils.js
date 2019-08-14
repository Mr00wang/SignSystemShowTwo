/*
进行user保存
 */
import store from 'store'
const USER_KEY = 'user_key'
const PLACE_KEY = 'place_key'
export default {
    /**
    保存user
     */
    saveUser (user) {
        // localStorage.setItem(USER_KEY, JSON.stringify(user))
        store.set(USER_KEY, user)
    },

    /**
    读取user
     */
    getUser () {
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
    },

    /**
    删除user
     */
    removeUser () {
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    },

    /**
    保存房间号
     */
    savePlace (place) {
        store.set(PLACE_KEY,place)
    },

    /**
     * 读取房间号
     */
    getPlace () {
        return store.get(PLACE_KEY) || {}
    },

    /**
     * 删除房间号
     */
    removePlace () {
        store.remove(PLACE_KEY)
    }
}