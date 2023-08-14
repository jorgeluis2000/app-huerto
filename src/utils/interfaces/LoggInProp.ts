import moment from 'moment'

export interface ILoggIn {
    token: string
    thereExpired: boolean
    expired: string
    nick: string
}


export interface ILoggInProps {
    token: string
    nick: string
    thereExpired?: boolean
    expired?: string
}