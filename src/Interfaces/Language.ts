
export class Language{
    Id?:number;
    Name:string;
    Culture:string;
    IsActive:boolean;
    Direction:boolean;
    constructor(ResourceName: string,
    Culture:string,
    IsActive:boolean,
    Direction:boolean){
        this.Name=ResourceName;
        this.Culture=Culture;
        this.IsActive=IsActive;
        this.Direction=Direction;
    }
}