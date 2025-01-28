import { OneSignal } from "react-native-onesignal"

export function tagUserEmailCreate(email:string) {
    OneSignal.User.addTag("user_email", email)   
}

export function removeTagUserEmailCreate(email:string) {
    OneSignal.User.removeTag("user_email")   
}

export function tagUserInfoCreate() {
    OneSignal.User.addTags({
        user_name: "Name",
        user_email: "email"})   
}

export function tagCarUpdate(itemsCount: string) {
    OneSignal.User.addTag("cart8items_count", itemsCount)
}