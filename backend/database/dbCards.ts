import {model, Schema} from 'mongoose'

export interface UserSchema {
    name: string
    imgURL: string
    _id: string
    __v: number
}

export const cardSchema = new Schema({
    name: String,
    imgURL: String
})

export default model('cards', cardSchema)