export interface Item{
    id:string,
    item:string,
    checked:boolean
}

export default class ListItem implements Item{
  
  constructor(
    private _id:string='',
    private _item:string='', 
    private _checked:boolean=false
    ){}

    get id():string {
        return this._id
    }
    set id(value:string){
        this._id= value
    }
    set item(item:string){
        this._item = item
    }
    get item():string{
        return this._item
    }
    set checked(val:boolean){
        this._checked=val
    }
    get checked():boolean{
        return this._checked 
    }
}
