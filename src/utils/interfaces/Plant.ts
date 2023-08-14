
export interface IPlant {
    _id: string,
    name_plant: string,
    description: string,
    height: number,
    type_fruit: string,
    updatedAt: string
}

export interface IPlantResponse {
    ok: true
    http_code: number
    data: IPlant[]
}